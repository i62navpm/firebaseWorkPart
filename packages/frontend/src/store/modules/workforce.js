import { firestoreAction } from 'vuexfire'
import { db } from '@/plugins/firebase/db'

export default {
  state: {
    workers: [],
  },
  mutations: {
    setWorkforce: (state, workers) => (state.workers = workers),
  },
  actions: {
    workforceRef: firestoreAction(({ bindFirestoreRef, rootGetters }) =>
      bindFirestoreRef(
        'workers',
        db
          .collection('users')
          .doc(rootGetters.getUser.email)
          .collection('workforce')
          .orderBy('createdAt')
      )
    ),
    createWorker: firestoreAction(({ rootGetters }, worker) =>
      db
        .collection('users')
        .doc(rootGetters.getUser.email)
        .collection('workforce')
        .add(worker)
    ),
    updateWorker: firestoreAction(({ rootGetters }, { id, data }) => {
      db.collection('users')
        .doc(rootGetters.getUser.email)
        .collection('workforce')
        .doc(id)
        .update(data)
    }),
  },
  getters: {
    getWorkforce: (state) => state.workers,
    getWorkerRef: (state) => (workerId) =>
      state.workers.find(({ id }) => id === workerId),
  },
}
