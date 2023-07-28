export interface RoutesInterface {
  HOME: {
    INDEX: string;
  };
  BOOKSCATALOGUEPAGE: {
    INDEX: string;
  };
  BOOKDETAILSPAGE: {
    INDEX: string;
  };
}

export const ROUTES_LIST: RoutesInterface = {
  HOME: {
    INDEX: '*',
  },
  BOOKSCATALOGUEPAGE: {
    INDEX: '/',
  },
  BOOKDETAILSPAGE: {
    INDEX: '/bookdetails',
  },
};
