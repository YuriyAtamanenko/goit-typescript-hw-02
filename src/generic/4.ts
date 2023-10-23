/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface Prop {
  title: string;
}

class Page extends Component<Prop> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
