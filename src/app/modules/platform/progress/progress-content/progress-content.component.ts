import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ModuleProgress {
  name: string;
  icon: string;
  accent: string;
  iconBg: string;
  status: number;
  lessons: number;
  lessonsCompletadas: number;
}

interface Achievement {
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}

@Component({
  selector: 'app-progress-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-content.component.html',
  styleUrl: './progress-content.component.scss'
})
export class ProgressContentComponent {
  moduleProgress: ModuleProgress[] = [
    { name: 'Introducción a Python', icon: 'pi pi-python', accent: '#10b981', iconBg: 'rgba(16, 185, 129, 0.1)', status: 80, lessons: 5, lessonsCompletadas: 4 },
    { name: 'Variables', icon: 'pi pi-database', accent: '#3b82f6', iconBg: 'rgba(59, 130, 246, 0.1)', status: 50, lessons: 4, lessonsCompletadas: 2 },
    { name: 'Tipos de datos', icon: 'pi pi-table', accent: '#8b5cf6', iconBg: 'rgba(139, 92, 246, 0.1)', status: 20, lessons: 4, lessonsCompletadas: 1 },
    { name: 'Operadores', icon: 'pi pi-calculator', accent: '#f59e0b', iconBg: 'rgba(245, 158, 11, 0.1)', status: 10, lessons: 3, lessonsCompletadas: 0 },
    { name: 'Condicionales', icon: 'pi pi-sitemap', accent: '#ef4444', iconBg: 'rgba(239, 68, 68, 0.1)', status: 0, lessons: 5, lessonsCompletadas: 0 },
    { name: 'Bucles', icon: 'pi pi-reload', accent: '#06b6d4', iconBg: 'rgba(6, 182, 212, 0.1)', status: 0, lessons: 4, lessonsCompletadas: 0 }
  ];

  achievements: Achievement[] = [
    { name: 'Primera lección', description: 'Completaste tu primera lección', icon: 'pi pi-star-fill', earned: true },
    { name: 'Racha de 5 días', description: '5 días consecutivos aprendiendo', icon: 'pi pi-bolt', earned: true },
    { name: '5 ejercicios', description: 'Resolviste 5 ejercicios prácticos', icon: 'pi pi-check-circle', earned: true },
    { name: 'Explorador', description: 'Iniciaste todos los módulos', icon: 'pi pi-compass', earned: false },
    { name: 'Completador', description: 'Completaste tu primer módulo', icon: 'pi pi-trophy', earned: false },
    { name: '10 ejercicios', description: 'Resolviste 10 ejercicios prácticos', icon: 'pi pi-code', earned: false }
  ];
}
