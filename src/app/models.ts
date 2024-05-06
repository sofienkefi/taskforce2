export interface Medecin{
    nom:string,
    prenom:string,
    age:number,
    grade:string,
    image:string
}
export interface Post
{
  userId: number,
  id: number,
  title: string,
  body: string
}
export interface Providers {
  id?: number;
  name: string;
  address: string;
  email: string;
}
export interface Article {
  id?: number;
  label: string;
  price: number;
  picture: string;
  provider: Providers;
}
export interface Articleadd {
  id?: number;
  label: string;
  price: number;
  picture: string;
}

export interface Users {
  id: number;
  name: string;
  username: string;

}
