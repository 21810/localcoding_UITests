const challenges = {
  default: {
    'name': 'test_a' + Date.now(),
    'programmingLang': 'JavaScript',
    'level': 'Easy',
    'checker': 'unit',
    'coursePurpose': false
  },
  multi_worlds: {
    'name': 'Test Multi Words',
    'programmingLang': 'JavaScript',
    'level': 'Easy',
    'checker': 'unit',
    'coursePurpose': false
  },
  contains_number: {
    'name': '1000001',
    'programmingLang': 'JavaScript',
    'level': 'Easy',
    'checker': 'unit',
    'coursePurpose': false
  },
  word: {
    'name': 'ChallengeCreatedForTesting',
    'programmingLang': 'JavaScript',
    'level': 'Easy',
    'checker': 'unit',
    'coursePurpose': false
  },
  special_chars: {
    'name': '*!@#$%^&*()_++}{|":?>,./;[]=-',
    'programmingLang': 'JavaScript',
    'level': 'Easy',
    'checker': 'unit',
    'coursePurpose': false
  }
};

const searchTestCases = {
  'TC-CH008 Verify that the user can search a challenge by word (equals)': {
    query: 'ChallengeCreatedForTesting',
    expectedCount: 2
  },
  'TC-CH009 Verify that the user can search a challenge by substring (starts with)': {
    query: 'test_a',
    expectedCount: 2
  },
  'TC-CH010 Verify that the user can search a challenge by substring (ends with)': {
    query: 'Words',
    expectedCount: 2
  },
  'TC-CH011 Verify that the user can search a challenge by multi word keyword': {
    query: 'Test Multi Words',
    expectedCount: 2
  },
  'TC-CH012 Verify that the user can search a challenge by number': {
    query: '1000001',
    expectedCount: 2
  },
  'TC-CH013 Verify that the user can search a challenge by special chars': {
    query: '*!@#$%^&*()_++}{|":?>,./;[]=-',
    expectedCount: 2
  },
  'TC-CH014 Verify that search is not case-sensitive': {
    query: 'multi',
    expectedCount: 2
  },
  'TC-CH015 Verify that the user gets No Data text in the table when there are no fetched search results': {
    query: 'no_search_results',
    expectedCount: 0
  }
};

module.exports = { challenges, searchTestCases };
