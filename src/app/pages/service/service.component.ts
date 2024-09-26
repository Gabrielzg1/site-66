import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-services',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements AfterViewInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private nucleus!: THREE.Mesh;
  private electron1!: THREE.Mesh;
  private electron2!: THREE.Mesh;
  private orbit1!: THREE.Line;
  private orbit2!: THREE.Line;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initThreeJS();
    this.animate();
  }

  // Inicializa a cena e o Three.js
  initThreeJS(): void {
    // Cria a cena
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f5);

    // Cria a câmera
    const width = this.el.nativeElement.querySelector('#three-canvas').clientWidth;
    const height = this.el.nativeElement.querySelector('#three-canvas').clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 10;

    // Cria o renderizador
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.el.nativeElement.querySelector('#three-canvas').appendChild(this.renderer.domElement);

    // Cria o núcleo (esfera central)
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Vermelho para o núcleo
    this.nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    this.scene.add(this.nucleus);

    // Cria os elétrons (esferas menores)
    const electronGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });

    this.electron1 = new THREE.Mesh(electronGeometry, electronMaterial);
    this.electron1.position.set(2, 0, 0);
    this.scene.add(this.electron1);

    this.electron2 = new THREE.Mesh(electronGeometry, electronMaterial);
    this.electron2.position.set(-2, 0, 0);
    this.scene.add(this.electron2);

    // Cria órbitas (anéis circulares)
    const orbitGeometry = new THREE.RingGeometry(2, 2.05, 64);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

    const orbitPoints = new THREE.Path().absarc(0, 0, 2, 0, Math.PI * 2).getPoints(64);
    this.orbit1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbitPoints), orbitMaterial);
    this.scene.add(this.orbit1);

    const orbitGeometry2 = new THREE.RingGeometry(3, 3.05, 64);
    const orbitPoints2 = new THREE.Path().absarc(0, 0, 3, 0, Math.PI * 2).getPoints(64);
    this.orbit2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbitPoints2), orbitMaterial);
    this.scene.add(this.orbit2);

    // Ajusta o renderizador ao redimensionar a tela
    window.addEventListener('resize', () => this.onWindowResize());
  }

  // Animação
  animate(): void {
    requestAnimationFrame(() => this.animate());

    // Anima os elétrons (orbitar ao redor do núcleo)
    this.electron1.position.x = Math.cos(Date.now() * 0.002) * 2;
    this.electron1.position.z = Math.sin(Date.now() * 0.002) * 2;

    this.electron2.position.x = Math.cos(Date.now() * 0.0015) * 3;
    this.electron2.position.z = Math.sin(Date.now() * 0.0015) * 3;

    // Renderiza a cena
    this.renderer.render(this.scene, this.camera);
  }

  // Função para ajustar o tamanho do renderizador quando a janela for redimensionada
  onWindowResize(): void {
    const width = this.el.nativeElement.querySelector('#three-canvas').clientWidth;
    const height = this.el.nativeElement.querySelector('#three-canvas').clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
