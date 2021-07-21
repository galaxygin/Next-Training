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

export function searchMember(name: string): Promise<Member> {
    return new Promise(resolve => {
        Firestore.collection("users").where('name', '==', name).get().then(snapshot => {
            snapshot.forEach(doc => {
                resolve({ "name": doc.data()?.name as string, "role": doc.data()?.role, "uri": "" })
            })
        })
    })
}


//I defined the functions below but not connecting to the pages
//Please replace the name of Collections with your own and connect to the pages

export function addMember(member: Member) {
    return Firestore.collection("users").add(member)
}

export function addMemberWithId(docId: string, member: Member) {
    return Firestore.collection("users").doc(docId).set(member)
}

export function updateMemberInfo(uid: string, name: string, profile: string) {
    return Firestore.batch().update(Firestore.collection("users").doc(uid), { 'name': name, "profile": profile }).commit()
}

export function removeMember(uid: string) {
    return Firestore.collection("users").doc(uid).delete()
}