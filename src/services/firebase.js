import { auth, realTimeDb } from "../firebase";

export const insert = async ({ key, id, payload }) => {
  await realTimeDb.ref(`${key}/${id}`).set(payload);
};

export const createAccount = async (email, password) => await auth.createUserWithEmailAndPassword(email, password);

export const login = async (email, password) => await auth.signInWithEmailAndPassword(email, password);

export const getData = async ({ key, query, criteria }) => {
  if (!criteria) return;
  const snapshot = await realTimeDb.ref().child(key).orderByChild(query).equalTo(criteria).get();
  const val = snapshot.val();
  if (val) {
    const keys = Object.keys(val);
    return val[keys[0]];
  }
  return null;
};