/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#mdp');
const txtMDPConfirm = document.querySelector('#mdpc');
console.log(formulaire, txtMDP, txtMDPConfirm);

// Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function coucou(event) {
    //Stoppe l'envoi du formulaire
    event.preventDefault();
    // Récupérer la valeur du mdp et de la confirmation du mdp
    let mdp = txtMDP.value;
    let mdpConfirm = txtMDPConfirm;

//Tester si les mdp sont identiques
    if(mdp !== mdpConfirm) {
        alert('Les mots de passes sont différents !!')
    } else {
        alert('Compte créé avec succès');
        //Envoyer le formulaire
        formulaire.submit();
    }
});
