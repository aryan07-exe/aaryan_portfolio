import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralScene({ compact = false }) {
  const host = useRef(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = compact ? 8 : 7.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const count = compact ? 900 : 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const blue = new THREE.Color("#64caff");
    const white = new THREE.Color("#d9f2ff");

    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      const radius = 1.65 + (Math.random() - 0.5) * 0.48;
      positions[i * 3] = radius * Math.sin(v) * Math.cos(t) * 1.12;
      positions[i * 3 + 1] = radius * Math.cos(v) * 1.28;
      positions[i * 3 + 2] = radius * Math.sin(v) * Math.sin(t);
      const c = blue.clone().lerp(white, Math.random() * 0.75);
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({
      size: compact ? 0.018 : 0.021, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true
    }));
    group.add(points);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.55, 2),
      new THREE.MeshBasicMaterial({ color: "#4abfff", wireframe: true, transparent: true, opacity: 0.10 })
    );
    group.add(wire);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: "#69cfff", transparent: true, opacity: 0.28 });
    [2.0, 2.25, 2.5].forEach((r, i) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.003, 4, 180), ringMaterial);
      ring.rotation.x = Math.PI * (0.32 + i * 0.15);
      ring.rotation.y = Math.PI * (0.15 + i * 0.22);
      group.add(ring);
    });

    let frame;
    let pointerX = 0, pointerY = 0;
    const onPointer = (e) => {
      const rect = el.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.28;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.2;
    };
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.0018;
      group.rotation.x += 0.0005;
      group.rotation.y += (pointerX - group.rotation.y * 0.08) * 0.008;
      group.rotation.x += (pointerY - group.rotation.x * 0.08) * 0.008;
      renderer.render(scene, camera);
    };
    animate();
    el.addEventListener("pointermove", onPointer);

    const resize = () => {
      if (!el.clientWidth || !el.clientHeight) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      el.removeEventListener("pointermove", onPointer);
      geometry.dispose(); points.material.dispose(); wire.geometry.dispose(); wire.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, [compact]);

  return <div ref={host} className="neural-scene" aria-hidden="true" />;
}