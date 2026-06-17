import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

interface Language {
  value: string;
  label: string;
  icon: string;
  template: string;
  color: string;
}

interface ConsoleLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'info';
}

interface DecorSymbol {
  char: string;
  x: string;
  y: string;
  size: string;
  delay: string;
  rotation: string;
}

@Component({
  selector: 'app-laboratory-content',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule],
  templateUrl: './laboratory-content.component.html',
  styleUrl: './laboratory-content.component.scss'
})
export class LaboratoryContentComponent {
  languages: Language[] = [
    {
      value: 'python',
      label: 'Python',
      icon: 'pi pi-python',
      color: '#10b981',
      template: `# Escribe tu código aquí

print("Hola, mundo!")`
    },
    {
      value: 'javascript',
      label: 'JavaScript',
      icon: 'pi pi-code',
      color: '#f59e0b',
      template: `// Escribe tu código aquí

console.log("Hola, mundo!");`
    },
    {
      value: 'java',
      label: 'Java',
      icon: 'pi pi-cog',
      color: '#ef4444',
      template: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hola, mundo!");
    }
}`
    },
    {
      value: 'cpp',
      label: 'C++',
      icon: 'pi pi-cog',
      color: '#3b82f6',
      template: `#include <iostream>
using namespace std;

int main() {
    cout << "Hola, mundo!" << endl;
    return 0;
}`
    }
  ];

  selectedLanguage = 'python';
  code = this.getCurrentTemplate();
  codeLines: number[] = [];
  consoleLines: ConsoleLine[] = [
    { text: 'Laboratorio listo. Selecciona un lenguaje y escribe tu código.', type: 'info' }
  ];
  isRunning = false;

  decorSymbols: DecorSymbol[] = [
    { char: '{', x: '8%', y: '15%', size: '1.8rem', delay: '0s', rotation: '0deg' },
    { char: '}', x: '92%', y: '25%', size: '1.8rem', delay: '2s', rotation: '0deg' },
    { char: '/*', x: '5%', y: '55%', size: '1.4rem', delay: '4s', rotation: '0deg' },
    { char: '*/', x: '95%', y: '65%', size: '1.4rem', delay: '1s', rotation: '0deg' },
    { char: 'for', x: '12%', y: '80%', size: '1rem', delay: '3s', rotation: '-5deg' },
    { char: '()', x: '88%', y: '10%', size: '1.2rem', delay: '5s', rotation: '10deg' },
    { char: '=>', x: '6%', y: '40%', size: '1.1rem', delay: '1.5s', rotation: '15deg' },
    { char: 'fn', x: '94%', y: '45%', size: '1.3rem', delay: '2.5s', rotation: '-10deg' },
    { char: 'class', x: '3%', y: '70%', size: '0.9rem', delay: '3.5s', rotation: '8deg' },
    { char: 'new', x: '97%', y: '85%', size: '1rem', delay: '4.5s', rotation: '-8deg' },
  ];

  hasErrorLines = false;

  constructor() {
    this.updateCodeLines();
  }

  get currentLang(): Language {
    return this.languages.find(l => l.value === this.selectedLanguage)!;
  }

  getCurrentLang(): Language {
    return this.currentLang;
  }

  getCurrentTemplate(): string {
    return this.currentLang.template;
  }

  updateCodeLines(): void {
    const count = this.code.split('\n').length;
    this.codeLines = Array.from({ length: count }, (_, i) => i + 1);
  }

  onLanguageChange(): void {
    this.code = this.getCurrentTemplate();
    this.updateCodeLines();
    this.consoleLines = [
      { text: `Lenguaje cambiado a ${this.currentLang.label}.`, type: 'info' }
    ];
  }

  execute(): void {
    if (this.isRunning) return;
    this.isRunning = true;

    this.consoleLines = [];
    this.simulateTyping([
      { text: `Ejecutando ${this.currentLang.label.toLowerCase()} main...`, type: 'input', delay: 100 },
      { text: 'Compilando...', type: 'input', delay: 350 },
      { text: 'Hola, mundo!', type: 'output', delay: 650 },
      { text: '', type: 'info', delay: 850 },
      { text: `Proceso finalizado en 0.24s`, type: 'info', delay: 900 },
      { text: `Salida: 0`, type: 'info', delay: 1050 },
    ]);
  }

  private simulateTyping(lines: { text: string; type: ConsoleLine['type']; delay: number }[]): void {
    lines.forEach((line, i) => {
      setTimeout(() => {
        this.consoleLines = [...this.consoleLines, { text: line.text, type: line.type }];
        if (line.text.includes('Salida')) {
          this.isRunning = false;
        }
      }, line.delay);
    });
  }

  clearConsole(): void {
    this.consoleLines = [
      { text: 'Consola limpiada.', type: 'info' }
    ];
  }

  get hasErrors(): boolean {
    return this.consoleLines.some(l => l.type === 'error');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      this.execute();
    }
  }
}
