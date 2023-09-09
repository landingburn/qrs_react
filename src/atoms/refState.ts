// refsState.ts

import React from 'react';
import { atom } from 'recoil';

export const refHomeState = atom<React.RefObject<HTMLDivElement>> ({
  key: 'refHomeState',
  default:React.createRef<HTMLDivElement>()
});

export const refTopicState = atom<React.RefObject<HTMLDivElement>> ({
  key: 'refTopicState',
  default:React.createRef<HTMLDivElement>()
});

export const refPreviousState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refPreviousState',
    default:React.createRef<HTMLDivElement>()
  });

  export const refSpeakerState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refSpeakerState',
    default:React.createRef<HTMLDivElement>()
  });

  export const refProgramState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refProgramState',
    default:React.createRef<HTMLDivElement>()
  });
  export const refOrganizerState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refOrganizerState',
    default:React.createRef<HTMLDivElement>()
  });
  export const refRegistrationState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refRegistrationState',
    default:React.createRef<HTMLDivElement>()
  });
  export const refSponsorState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refSponsorState',
    default:React.createRef<HTMLDivElement>()
  });
  export const refAccommodationState = atom<React.RefObject<HTMLDivElement>> ({
    key: 'refAccommodationState',
    default:React.createRef<HTMLDivElement>()
  });