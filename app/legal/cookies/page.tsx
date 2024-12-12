export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-invert max-w-3xl">
      <h1>Politique des Cookies</h1>
      
      <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>

      <h2>1. Utilisation des Cookies</h2>
      <p>Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à :</p>
      <ul>
        <li>Mémoriser vos préférences</li>
        <li>Comprendre comment vous utilisez notre site</li>
        <li>Améliorer nos services</li>
      </ul>

      <h2>2. Types de Cookies</h2>
      <p>Nous utilisons les types de cookies suivants :</p>
      <ul>
        <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
        <li>Cookies analytiques : pour comprendre l'utilisation du site</li>
        <li>Cookies de préférences : pour mémoriser vos choix</li>
      </ul>

      <h2>3. Gestion des Cookies</h2>
      <p>Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre appareil et paramétrer la plupart des navigateurs pour les bloquer.</p>

      <h2>4. Contact</h2>
      <p>Pour toute question concernant notre utilisation des cookies, contactez-nous à : contact@tamsir.fr</p>
    </div>
  );
}