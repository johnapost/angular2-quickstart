import {bootstrap, Component} from 'angular2/angular2';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

class Hero {
  id: number;
  name: string;
}

bootstrap(AppComponent);
