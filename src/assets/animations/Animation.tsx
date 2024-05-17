import {keyframes} from "styled-components";

export const CircleGlow = keyframes`
  0%{
    box-shadow:
            0 0 4px rgba(3,233,244, 1),
            0 0 4px rgba(3,233,244, 1) inset,
            0 0 10px rgba(3,233,244, 1),
            0 0 10px rgba(3,233,244, 1) inset,
            0 0 20px rgba(3,233,244, 1),
            0 0 20px rgba(3,233,244, 1) inset;
  }
  50%{
    box-shadow:
            0 0 4px rgba(3,233,244, 1),
            0 0 4px rgba(3,233,244, 1) inset,
            0 0 10px rgba(3,233,244, 1),
            0 0 10px rgba(3,233,244, 1) inset,
            0 0 20px rgba(3,233,244, 1),
            0 0 20px rgba(3,233,244, 1) inset,
            0 0 25px rgba(3,233,244, 1),
            0 0 25px rgba(3,233,244, 1) inset;            
  }
  0%{
    box-shadow:
            0 0 4px rgba(3,233,244, 1),
            0 0 4px rgba(3,233,244, 1) inset,
            0 0 10px rgba(3,233,244, 1),
            0 0 10px rgba(3,233,2446, 1) inset,
            0 0 20px rgba(3,233,244, 1),
            0 0 20px rgba(3,233,244, 1) inset;
  }
`

export const AnimateSurfaceCube = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-200px);
  }
`

export const TurningShakingCube = keyframes`
  0%{
    transform: rotate(0deg);
  }
  60%{
    transform: rotate(90deg);
  }
  65%{
    transform: rotate(85deg);
  }
  70%{
    transform: rotate(90deg);
  }
  75%{
    transform: rotate(87.5deg);
  }
  80%,100%{
    transform: rotate(90deg);
  }
`
export const btnFormAnimation = keyframes`
0%{
  margin-right: 40px;
}
50%{
margin-right: 20px;
}
0%{
margin-right: 40px;
}
`