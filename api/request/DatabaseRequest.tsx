import { Firestore } from "../../FirebaseManager"
import { Member } from "../../types/Types"

export function getMembers(): Promise<Member[]> {
    return new Promise(resolve => {
        Firestore.collection("users").get().then(snapshot => {
            const list: Member[] = []
            snapshot.forEach(doc => (
                list.push({ "name": doc.data().name, "role": doc.data().role, "uri": "" })
            ))
            resolve(list)
        })
    })
}

export function getMemberProfile(docId: string): Promise<Member> {
    return new Promise(resolve => {
        Firestore.collection("users").doc(docId).get().then(doc => {
            if (doc.exists)
                resolve({ "name": doc.data()?.name as string, "role": doc.data()?.role, "uri": "" })
        })
    })
}

export function addMember(member: Member) {
    return Firestore.collection("users").add(member)
}