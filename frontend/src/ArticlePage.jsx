import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Icon from '@mdi/react';
import { mdiArrowUpDropCircleOutline} from '@mdi/js';

function ArticlePage() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar />
            <h1>Quelles sont les fake news les plus répandues sur le climat ?</h1>
            <p>15/10/2021</p>
            <p className='ArticleParagraph'>Le climat est un des sujets qui suscitent le plus de fausses informations sur Internet et les réseaux sociaux, niant le plus souvent l’ampleur du réchauffement climatique en cours. Quelles sont-elles ? Et comment y répondre ? Tour d'horizon et déconstruction des fake-news les plus répandues sur le climat.</p>
            
            <h2>"Le réchauffement climatique, c'est à cause du soleil"</h2>
            <p className='ArticleParagraph'>Oui, le soleil peut réchauffer la planète si l'énergie qu'il fournit augmente. D'ailleurs depuis 1750, l'intensité de son rayonnement augmente légèrement mais pas suffisamment pour expliquer le réchauffement actuel. Sa contribution est de l'ordre de plusieurs dizaines de fois inférieure à celle de l'accumulation des gaz à effet de serre dans l'atmosphère.</p>
            <p className='ArticleParagraph'>Dans un article du 6 septembre 2019, la NASA abonde dans ce sens : "Le soleil apporte la vie à la Terre. Il aide à garder la planète assez chaude pour qu’on y survive. Il influence aussi le climat de la Terre : nous savons que d’infimes changements de l’orbite terrestre autour du Soleil sont responsables des débuts et fins d’ères glaciaires. Mais le réchauffement que l’on a constaté au cours des dernières décennies est trop rapide pour être lié aux changements de l’orbite terrestre, et trop important pour être causé par l’activité solaire."</p>
            
            <h2>"Le réchauffement climatique, c'est à cause de la modification de l’axe de rotation terrestre (cycles de Milankovitch)"</h2>
            <p className='ArticleParagraph'>La théorie de Milutin Milankovitch, publiée en 1941, rend compte de l'alternance des cycles glaciaires et interglaciaires durant le quaternaire. Cette théorie des cycles est fiable pour expliquer une glaciation et/ou un réchauffement à l'échelle de dizaines de milliers d'années ou de centaines de milliers d'années mais elle n'est pas adaptée pour expliquer la hausse rapide des températures observée au cours des deux derniers siècles. Ces 200 dernières années ne correspondent en rien à une échelle de temps géologique.</p>
            
            <h2>"Il ne faut pas s'inquiéter du réchauffement actuel, car la planète en a connu d'autres"</h2>
            <p className='ArticleParagraph'>Notre climat a toujours changé en fonction de cycles. Nous savons ainsi que, durant le quaternaire, le climat alterne entre périodes glaciaires et interglaciaires (plus chaudes) tous les 100 000 ans environ. Les chercheurs ont pu également identifier de plus courtes périodes de changement du climat. Mais depuis le début de l'ère industrielle, notre climat se réchauffe à une vitesse beaucoup plus rapide. Et cela s’accélère depuis 1950. Depuis 1900, la température moyenne du globe a augmenté d’environ 1 °C et celle de la France métropolitaine de près de 2 °C.</p>
            
            <h2>"Le mois dernier, il a fait 'frais' chez moi et on me parle de réchauffement climatique..."</h2>
            <p className='ArticleParagraph'>Les températures relevées un jour ou sur quelques jours de suite à un endroit donné ne constituent pas une tendance de long terme. Autrement dit, une température moyenne un peu "fraîche" sur une journée n'empêche en rien de vivre un mois avec une température moyenne au-dessus des normales. C'est toute la différence entre météo et climat. La première fait référence aux conditions quotidiennes de l’atmosphère – la température maximale, la quantité de couverture nuageuse, la vitesse et la direction du vent, ainsi que les précipitations. Le "climat", quant à lui, décrit les conditions atmosphériques moyennes sur de nombreuses années.</p>
            
            <h2>"La fonte des calottes ne fait pas monter le niveau de la mer"</h2>
            <p className='ArticleParagraph'>Selon les scientifiques, le niveau des mers et des océans pourrait s'élever d'un mètre voire plus d'ici 2100 en raison du réchauffement climatique en cours. La fonte totale d'un iceberg flottant en mer ne fait pas monter le niveau de la mer. En revanche, les icebergs proviennent d'une accumulation de neige se transformant en glace sur continents, glace qui s'écoule lentement vers les côtes. Donc lorsque la glace constituant les icebergs se sépare du socle rocheux avant de se détacher ou de se mettre à flotter (on parle alors d'ice shelves en anglais ou de barrières de glace), il y a bien hausse du niveau de la mer.</p>
            
            <h2>"Il n’est pas nécessaire d’agir pour réduire nos émissions : même si la Terre se réchauffe, l’homme s'y adaptera"</h2>
            <p className='ArticleParagraph'>Il y a 20 000 ans, le climat était plus froid qu'aujourd'hui de seulement cinq degrés environ. Le scénario le plus pessimiste envisage aujourd'hui jusqu'à 5 °C de réchauffement global d'ici à 2100 soit en moins d'un siècle. Sans politique climatique ambitieuse, les conséquences du réchauffement climatique déjà dramatiques dans certaines régions du globe, pourraient être désastreuses à plus long terme.</p>
            
            <h2>"Le réchauffement climatique ne fait pas totalement consensus"</h2>
            <p className='ArticleParagraph'>Déjà diagnostiqué dans les années 1990, le réchauffement climatique s’est poursuivi depuis. Les rapports successifs du Giec n'ont cessé de réaffirmer le consensus scientifique autour de ce réchauffement global. Entre 2009 et 2015, le consensus quant à son origine anthropique se situait autour de 97 %. Une évaluation parue dans le Bulletin of Science, Technology & Society le 20 novembre 2019 a poussé ce taux encore un peu plus loin. Au total, ce sont plus de 11 600 articles publiés sur le sujet dans des revues scientifiques spécialisées, entre le 1er janvier et début août 2019, qui ont été examinés. Or, il apparaît que 100 % des articles soutiennent l’idée d’une cause anthropique au réchauffement global actuel.</p>
            
            <h2>"Le Giec n'est pas certain de l'origine anthropique du réchauffement climatique"</h2>
            <p className='ArticleParagraph'>Le Giec concluait déjà dans son 5e rapport de 2013 : "Le réchauffement climatique est sans équivoque". L'impact de l'Homme sur le climat "est clair et en augmentation, avec des incidences observées sur tous les continents". "Depuis les années 1950, les changements observés sont sans précédent. L'atmosphère et les océans se réchauffent, les quantités de neige et de glace diminuent, le niveau de la mer monte".</p>
            <p className='ArticleParagraph'>L’influence humaine sur le climat est également décelable dans certains événements climatiques extrêmes. Récemment encore, une analyse scientifique a montré que la canicule de juin 2020 dans le nord de la Sibérie (jusqu'à 38 °C) aurait été presque impossible sans le réchauffement climatique d'origine humaine.</p>
            
            <h2>"Le Giec est un laboratoire de recherche payé par les politiques"</h2>
            <p className='ArticleParagraph'>Le Giec ne mène pas de travaux de recherche : il synthétise les connaissances existantes sous forme de rapports. Les auteurs et co-auteurs s’investissent énormément dans les travaux du Giec dans le cadre de leurs missions de recherche. Ils doivent, en plus de leurs propres recherches, consacrer l’équivalent de quatre à cinq mois équivalent temps plein au Giec.</p>

            <p className='ArticleParagraph'>Source : <a href="https://meteofrance.com/actualites-et-dossiers/entretiens/quelles-sont-les-fake-news-les-plus-repandues-sur-le-climat" target="_blank" rel="noopener noreferrer">Météo France</a></p>

            <Footer />
            <button onClick={scrollToTop} className='GoBackToTop'>
                <Icon path={mdiArrowUpDropCircleOutline} size={1} />
            </button>
        </div>
    );
}

export default ArticlePage;