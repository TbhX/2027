export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-invert max-w-3xl">
      <h1>Politique de Confidentialité</h1>
      
      <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>

      <h2>1. Collecte des Informations</h2>
      <p>Nous collectons les informations que vous nous fournissez directement lorsque vous :</p>
      <ul>
        <li>Remplissez notre formulaire de contact</li>
        <li>Souscrivez à nos services</li>
        <li>Communiquez avec nous par email</li>
      </ul>

      <h2>2. Utilisation des Informations</h2>
      <p>Les informations que nous collectons sont utilisées pour :</p>
      <ul>
        <li>Fournir et améliorer nos services</li>
        <li>Communiquer avec vous concernant votre projet</li>
        <li>Personnaliser votre expérience</li>
      </ul>

      <h2>3. Protection des Données</h2>
      <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé ou toute modification, divulgation ou destruction non autorisée.</p>

      <h2>4. Contact</h2>
      <p>Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à : contact@tamsir.fr</p>
    </div>
  );
}