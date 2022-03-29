const TYPES = {
  usernameEmpty: {
    code: 400,
    error: 'Username is required',
  },
  usernameBeString: {
    code: 422,
    error: 'Username must be a string',
  },
  usernameBeLonger: {
    code: 422,
    error: 'Username must be longer than 2 characters',
  },
  classeEmpty: {
    code: 400,
    error: 'Classe is required',
  },
  classeBeString: {
    code: 422,
    error: 'Classe must be a string',
  },
  classeBeLonger: {
    code: 422,
    error: 'Classe must be longer than 2 characters',
  },
  levelEmpty: {
    code: 400,
    error: 'Level is required',
  },
  levelBeString: {
    code: 422,
    error: 'Level must be a number',
  },
  levelBeLonger: {
    code: 422,
    error: 'Level must be greater than 0',
  },
  passwordEmpty: {
    code: 400,
    error: 'Password is required',
  },
  passwordBeString: {
    code: 422,
    error: 'Password must be a string',
  },
  passwordBeLonger: {
    code: 422,
    error: 'Password must be longer than 7 characters',
  },
};

const verifyUsername = (username: string) => {
  if (!username) return TYPES.usernameEmpty;
  if (typeof username !== 'string') return TYPES.usernameBeString;
  if (username.length < 3) return TYPES.usernameBeLonger;
  return false;
};

const verifyClasse = (classe: string) => {
  if (!classe) return TYPES.classeEmpty;
  if (typeof classe !== 'string') return TYPES.classeBeString;
  if (classe.length < 3) return TYPES.classeBeLonger;
  return false;
};

const verifyLevel = (level: number) => {
  if (level === undefined) return TYPES.levelEmpty;
  if (typeof level !== 'number') return TYPES.levelBeString;
  if (level < 1) return TYPES.levelBeLonger;
  return false;
};

const verifyPassword = (password: string) => {
  if (!password) return TYPES.passwordEmpty;
  if (typeof password !== 'string') return TYPES.passwordBeString;
  if (password.length < 8) return TYPES.passwordBeLonger;
  return false;
};

export default {
  create: (body: any) => {
    const { username, classe, level, password } = body;
    if (verifyUsername(username)) return verifyUsername(username);
    if (verifyClasse(classe)) return verifyClasse(classe);
    if (verifyLevel(level)) return verifyLevel(level);
    if (verifyPassword(password)) return verifyPassword(password);
    
    return false;
  },
};
