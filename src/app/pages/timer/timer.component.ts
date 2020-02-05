import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timer;  // NodeJS.Timer
  disableReset: boolean;
  secondsRemaining: number;  // seconds left on timer

  bubbleBegin = new Audio("assets/mp3/bubble-begin.mp3");
  bubbleMuted = new Audio("assets/mp3/bubble-muted.mp3");
  bubbleTimeUp = new Audio("assets/mp3/bubble-time-up.mp3");
  bubbleCountdown = new Audio("assets/mp3/bubble-initial-countdown.mp3");

  constructor() {
    this.secondsRemaining = 0;
    this.disableReset = false;
  }

  ngOnInit() {}

  startTimerForDuration(duration: number, progressSubdivisions: number) {

    const progressInterval = Math.ceil(duration / progressSubdivisions);

    this.secondsRemaining = duration;
    this.bubbleBegin.play();

    this.timer = setInterval(updateTimer => {

      this.secondsRemaining--;

      if(this.secondsRemaining > 0) {
        // Play a muted sound alerting user that a subdivision has passed
        //  e.g if duration is 40 with 4 subdivisions, play sound every 10 seconds
        if (this.secondsRemaining % progressInterval == 0) {
          this.bubbleMuted.play();
        }
      } else {
        this.bubbleTimeUp.play();
        clearInterval(this.timer);
      }

    }, 1000);

  }

  readySetGo(duration: number, progressSubdivisions: number) {

    this.reset();
    this.toggleReset(); // Reset unavailable during countdown

    let countdown = 3;

    let readySetGoTimer = setInterval(updateTimer => {

      if (countdown === 0) {
        clearInterval(readySetGoTimer);
        this.toggleReset(); // Re-enable reset button
        this.startTimerForDuration(duration, progressSubdivisions);
      } else {
        this.secondsRemaining = countdown;
        this.bubbleCountdown.play();
      }
      
      countdown--;

    }, 1000);
  }

  reset() {
    clearInterval(this.timer);
    this.secondsRemaining = 0;
    this.bubbleMuted.play();
  }

  toggleReset() {
    this.disableReset = !this.disableReset;
  }

}
