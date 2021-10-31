import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'pv2-neon-button',
  templateUrl: './neon-button.component.html',
  styleUrls: ['./neon-button.component.scss']
})
export class NeonButtonComponent implements OnInit {
  @ViewChild('neonButton') nb: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked() {
    if (this.nb?.nativeElement.classList.contains('neon-button-anim')){
      this.nb?.nativeElement.classList.remove('neon-button-anim');
    }
    setTimeout(() => {
      this.nb?.nativeElement.classList.add('neon-button-anim');
    }, 50);
  }
}
