export class formateur {
    nom?: string;
    prenom?: string;
    email?: string;
    password?: string;
    statut?: string;
    telephone?: number;


constructor(nom: string, prenom: string, email: string, password: string, statut: string, telephone: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.statut = statut;
    this.telephone = telephone;
  }
}