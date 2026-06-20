import { Injectable } from '@angular/core';
import { Testimonial } from '../models/testimonial.interface';

const STORAGE_KEY = 'edocode_testimonials';

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sofía Martínez',
    role: 'Estudiante de Ing. de Sistemas',
    text: 'EduCode me ayudó a entender la lógica de programación mucho más rápido que los métodos tradicionales. ¡La validación en tiempo real es excelente!',
    stars: 5,
    createdAt: new Date('2025-01-15')
  },
  {
    name: 'Alejandro Ruiz',
    role: 'Desarrollador Junior Frontend',
    text: 'Los laboratorios interactivos son muy prácticos. Sentar las bases con sus retos fue clave para conseguir mi primer empleo como programador.',
    stars: 5,
    createdAt: new Date('2025-02-20')
  },
  {
    name: 'Andrea Gómez',
    role: 'Estudiante de Telecomunicaciones',
    text: 'Aprender SQL en EduCode fue sumamente intuitivo. El paso a paso te guía sin abrumarte y los retos incrementales son adictivos.',
    stars: 5,
    createdAt: new Date('2025-03-10')
  }
];

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  private testimonials: Testimonial[] = [];

  constructor() {
    this.load();
  }

  getAll(): Testimonial[] {
    return [...this.testimonials];
  }

  add(t: Testimonial): void {
    this.testimonials.unshift(t);
    this.save();
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.testimonials = JSON.parse(raw);
      } else {
        this.testimonials = [...DEFAULT_TESTIMONIALS];
        this.save();
      }
    } catch {
      this.testimonials = [...DEFAULT_TESTIMONIALS];
    }
  }

  private save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.testimonials));
    } catch {}
  }
}
