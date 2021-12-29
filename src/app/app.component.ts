import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'routeAnim', [
      transition('* => *', [
        style({
          position: 'relative'
        }),


        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        group([
          query(':leave', [
            animate(500, style({
              transform: 'translateX(-80px)',
              opacity: 0,
            }))
          ], { optional: true }),
          query(':enter', [
            style({
              opacity: 0,
            }),
            animate(1500, style({
              opacity: 1,
            }))
          ], { optional: true })
        ]),
      ])
    ]
    )
  ]

})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated)
      return outlet.activatedRoute.snapshot.url

    return null;
  }


}
