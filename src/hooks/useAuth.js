import http, { cookies, transformResponse } from '../utils/http';

let authToken = null;

const login = async (email, password, remember, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/users/login', { email, password });
    // Cookie expires in 7 days
    const maxAge = remember ? 7 * 24 * 60 * 60 - 60 : null;

    authToken = data.authToken;

    cookies.set('auth', authToken, { path: '/', maxAge });

    return authToken;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return;
  }
};

const signup = async (name, email, password, setResult) => {
  setResult('');

  try {
    const { data } = await http.post('/users/signup', {
      name,
      email,
      password,
    });

    const result = transformResponse(data.result);

    setResult(result);

    return true;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return;
  }
};

const logout = async (all) => {
  cookies.remove('auth');

  try {
    await http.get(`/users/logout/all`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return true;
  } catch ({ response }) {
    return;
  }
};

const getProfile = async () => {
  try {
    const { data } = await http.get('/users/profile');

    return data;
  } catch (_) {
    return;
  }
};

const updateProfile = async (name, email, password, avatar, setResult) => {
  setResult('');

  try {
    const { data } = await http.put(`/users/profile`, {
      name: name || undefined,
      email: email || undefined,
      password: password || undefined,
    });

    if (avatar instanceof File) {
      const formData = new FormData();
      const config = { headers: { 'content-type': 'multipart/form-data' } };

      formData.append('avatar', avatar, avatar.name);

      const { result } = await http.post(
        '/users/profile/avatar',
        formData,
        config
      );

      data.avatar = avatar;
    }

    return data;
  } catch ({ response }) {
    const error = transformResponse(response.data.reason);

    setResult(error);

    return;
  }
};

const getUsersByIds = async (userIds) => {
  try {
    const { data } = await http.post('/users/ids', { userIds });

    return data;
  } catch ({ response }) {
    return;
  }
};

const checkUserEmail = async (email, currentUserEmail, setResult) => {
  try {
    if (email === currentUserEmail) {
      throw { response: 'That is not necessary' };
    }

    const { data } = await http.get(`/users/mail/${email || null}`);

    return data;
  } catch ({ response }) {
    const error =
      response.status === 404
        ? 'No such user with that email'
        : response.data && response.data.reason
        ? transformResponse(response.data.reason)
        : response;

    setResult(error);

    return;
  }
};

const checkAvatar = async (userId) => {
  try {
    await http.get(`/users/${userId}/avatar.png`);

    return true;
  } catch (_) {
    return;
  }
};

const getAvatarUri = (userId) =>
  `${
    import.meta.env.VITE_BACKEND_URI
  }/users/${userId}/avatar.png?t=${new Date().getTime()}`;

export {
  login,
  signup,
  logout,
  getProfile,
  updateProfile,
  getUsersByIds,
  checkUserEmail,
  checkAvatar,
  getAvatarUri,
};
