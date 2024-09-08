export function age(planet: string, seconds: number): number {
  let secondsInYear = 31557600;
  let multiMercury = 0.2408467;  
  let multiVenus=  0.61519726;
  let multiEarth= 1.0;
  let multiMars= 1.8808158 ;
  let multiJupiter= 11.862615;
  let multiSaturn= 29.447498 ;
  let multiUranus= 84.016846 ;
  let multiNeptune= 164.79132;
  let age = 0;
  switch (planet.toLowerCase())
  {
    case 'mercury':
      age = (seconds / secondsInYear) / multiMercury;
      break;
      case 'venus':
        age = (seconds / secondsInYear)  / multiVenus;
        break;
        case 'earth':
          age = (seconds / secondsInYear)  / multiEarth;
          break;
          case 'mars':
            age = (seconds / secondsInYear)  / multiMars;
            break;
            case 'jupiter':
              age = (seconds / secondsInYear)  / multiJupiter;
              break;
              case 'saturn':
                age = (seconds / secondsInYear)  / multiSaturn;
                break;
                case 'uranus':
                  age = (seconds / secondsInYear)  / multiUranus;
                  break;
                  case 'neptune':
                    age = (seconds / secondsInYear)  / multiNeptune;
                    break;
                    default:
                      age = (seconds / secondsInYear) ;                                                        
  }
  return Number(age.toFixed(2));
}
