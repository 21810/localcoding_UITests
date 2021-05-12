const users = {
  new: {
    role: 'new',
    email: 'new@localcoding.us',
    password: 'New123',
    firstName: 'Pedro',
    lastName: 'Almodovar',
    country: '',
    phone: '12312312334',
  },
  leaner: {
    role: 'leaner',
    email: 'learner@localcoding.us',
    password: 'Learner456',
    firstName: 'Bruce',
    lastName: 'Willis',
    country: '',
    phone: '12312312334',
  },
  student: {
    role: 'student',
    email: 'student@localcoding.us',
    password: 'Student789',
    firstName: 'Jennifer',
    lastName: 'Lopez',
    country: '',
    phone: '12312312334',
  },
  teacher: {
    role: 'teacher',
    email: 'teacher@localcoding.us',
    password: 'Teacher000',
    firstName: 'Yoda',
    lastName: 'Jedi',
    country: '',
    phone: '12312312334',
  },
  admin: {
    role: 'admin',
    email: 'admin@localcoding.us',
    password: 'Godspeed101',
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    country: '',
    phone: '12312312334',
  },
  deactivated: {
    role: 'deactivated',
    email: 'loser@localcoding.us',
    password: 'G00dbyeWorld',
    firstName: 'Poligraph',
    lastName: 'Poligraphych',
    country: '',
    phone: '12312312334',
  },
  name: {
    oneSymbol: 'P',
    tenSymbols: 'PedroPedro',
    twentySymbols: 'PedroPedroPedroPedroPedro',
    twentyOneSymbols: 'PedroPedroPedroPedroP',
    digits: 123,
    specialChar: '!@#$%'
  },
  country: {
    UnitedStates: 'United States',
    Russia: 'Russia',
    Ukraine: 'Ukraine'
  },

  phone: {
    nineDigits: 123456789,
    tenDigits: 1234567890,
    elevenDigits: 12345678912,
    twelveDigits: 123456789112,
    letters: 'United States',
    specialChar: '!@#$%^&*&^',
    combainSCharAndDigits: '123456789+',
    combainLettersAndDigits: '123456789+'
  },

  email: {
    new123: 'new123@localcoding.us',
    lettersDigitsSpChar: 'new123!$@localcoding.us',
    oneLetter: 'n@localcoding.us',
    oneDigit: '1@localcoding.us',
    oneSymbol: '$@localcoding.us',
    withoutDot: 'new@localcodingus',
    withoutAtSign: 'newlocalcoding.us',
    withoutAtSignInTheName: 'n@ew@localcoding.us',
    dotInTheName: 'new.@localcoding.us'
  },

  password: {
    fiveSymbols: 'New12',
    fourSymbols: 'New1',
    letters: 'NewUser',
    digits: '12345',
    specialChar: '!@#$%',
    lettersAndSpecialChar: 'new@#',
    digitsAndSpecialChar: '123@#',
    lettersAndDigits: 'New123',
    whiteSpace: 'New  123'
  }

};

module.exports = {users};
