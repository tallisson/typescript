// @Component
// @Selector
// @useState
// Factory
function Logger(prefix: string) {
  return (target: Object) => {    
    console.log(`${prefix} - ${target}`);
  }
}

@Logger('awesome')
class Foo {
}

// Class decorator

function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {      
      version = apiVersion;
    }
  }
}

// decorator anotar versão
@setApiVersion("2.0.0")
class API { }

console.log(new API());

// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length) {
        console.log('Erro');
      } else {
        val = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  };
}

class Movie {
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar');
console.log(movie.title);

// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.log(`Esperando ${ms}ms...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  }
}

class Greater {
  greetings: string;

  constructor(g: string) {
    this.greetings = g;
  }

  @delay(200)
  greet() {
    console.log(this.greetings);
  }
}

const pessoinha = new Greater('Pessoinha!');
pessoinha.greet();

// Parameter decorator


// Acessor decorator