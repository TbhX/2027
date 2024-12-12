export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-invert max-w-3xl">
      <h1>Conditions Générales d'Utilisation</h1>
      
      <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>

      <h2>1. Services</h2>
      <p>Nous proposons des services de développement web personnalisés, incluant :</p>
      <ul>
        <li>Développement d'applications web</li>
        <li>Design UI/UX</li>
        <li>Maintenance et support</li>
      </ul>

      <h2>2. Tarification</h2>
      <p>Notre offre unique de 1000€ comprend :</p>
      <ul>
        <li>Développement complet du projet</li>
        <li>Design responsive</li>
        <li>3 mois de support</li>
      </ul>

      <h2>3. Modalités de Paiement</h2>
      <p>Nous proposons trois options de paiement :</p>
      <ul>
        <li>Paiement intégral</li>
        <li>Paiement 80-20 (80% à la commande, 20% à la livraison)</li>
        <li>Paiement en espèces</li>
      </ul>

      <h2>4. Contact</h2>
      <p>Pour toute question concernant ces conditions, contactez-nous à : contact@tamsir.fr</p>
    </div>
  );
}