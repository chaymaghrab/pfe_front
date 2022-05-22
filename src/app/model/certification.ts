

export declare interface certification {
    nom_formation?: string;
    nbheure?: number; //  must be valid email format
    score_de_passage?: number; // required, value must be equal to confirm password.
    nbquestion?: number; // required, value must be equal to password.
    type_examan?: string; // required, value must be equal to password.
    duree?: number;
}