// données temporaire pur la maquette, tirée de la config du widget-map.
// doit correspondre aux attributs d'un Layer esri @see {__esri.LayerProperties}
import { SubLayer } from "./sub-layer.vo";

export const STUB_LAYERS: SubLayer[] = [
  {
    uid: "service-s01-gaia-voie-v2",
    title: "Infrastructures voies",
    url: "/arcgis/rest/services/gaiav2/socle_gaia_voie_v2/MapServer",
    sublayers: [
      {
        uid: "service-s01-gaia-voie-v2-0000-protection",
        title: "Protection",
        id: "0",
        visible: false,
        minScale: 18055,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0001-jdz",
            title: "Joint de zone",
            id: "1",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0002-zep",
            title: "Zone élémentaire de protection",
            id: "2",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s01-gaia-voie-v2-0003-signaux",
        title: "Signaux",
        id: "3",
        visible: false,
        minScale: 18055,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0004-saa",
            title: "Signaux d'arrêt ou d'annonce",
            id: "4",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0005-sd",
            title: "Signaux divers",
            id: "5",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0006-slv",
            title: "Signaux de limitation de vitesse",
            id: "6",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0007-sm",
            title: "Signaux de manoeuvre",
            id: "7",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0008-sdte",
            title: "Signaux dédiés à la traction électrique",
            id: "8",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0009-stvm",
            title: "Signaux TVM",
            id: "9",
            visible: false,
            minScale: 18055,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s01-gaia-voie-v2-0010-if",
        title: "Installations fixes",
        id: "10",
        visible: false,
        minScale: 577790,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0011-dbc",
            title: "Détecteurs de boite chaude",
            id: "11",
            visible: false,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0012-quai",
            title: "Quai",
            id: "12",
            visible: false,
            minScale: 577790,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s01-gaia-voie-v2-0013-decoup",
        title: "Découpages",
        id: "13",
        visible: false,
        minScale: 577790,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0014-courbe",
            title: "Courbe",
            id: "14",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0015-dcl",
            title: "Déclivité",
            id: "15",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0016-ec",
            title: "Eléments caténaires (sections élémentaires)",
            id: "16",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0017-ev",
            title: "Etat de la voie",
            id: "17",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0018-glvoh",
            title: "Gabarit limite voyageurs des obstacles hauts",
            id: "18",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0019-glfoh",
            title: "Gabarit limite fret des obstacles hauts",
            id: "19",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-00020-ipcs",
            title: "Installations permanentes de contre-sens",
            id: "20",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0021-msc",
            title: "Masses Sens Croissant",
            id: "21",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0022-msd",
            title: "Masses Sens Décroissant",
            id: "22",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0023-nlv",
            title: "Nom local des voies",
            id: "23",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0024-sc",
            title: "Sens de circulation",
            id: "24",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0025-te",
            title: "Type d'électrification",
            id: "25",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0026-vsc",
            title: "Vitesses Sens Croissant",
            id: "26",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0027-vsd",
            title: "Vitesses Sens Décroissant",
            id: "27",
            visible: false,
            minScale: 2311162,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s01-gaia-voie-v2-0028-vp",
        title: "Voies Principales",
        id: "28",
        visible: true,
        minScale: 577790,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0029-ev",
            title: "Extrémités de voies",
            id: "29",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0030-ndv",
            title: "Noeuds de voies",
            id: "30",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0031-tdv",
            title: "Tronçons de voies",
            id: "31",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0032-voies",
            title: "Voies",
            id: "32",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s01-gaia-voie-v2-0033-vsaf",
        title: "Voies de SAF",
        id: "33",
        visible: true,
        minScale: 577790,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0034-safn",
            title: "Noeud",
            id: "34",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0035-saft",
            title: "Troncon",
            id: "35",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s01-gaia-voie-v2-0036-lignes",
        title: "Lignes",
        id: "36",
        visible: true,
        minScale: 577790,
        maxScale: 70,
        sublayers: [],
      },
      {
        uid: "service-s01-gaia-voie-v2-0037-sp",
        title: "Signalisation permanente",
        id: "37",
        visible: false,
        minScale: 72223,
        maxScale: 70,
        sublayers: [],
      },
      {
        uid: "service-s01-gaia-voie-v2-0038-pe",
        title: "Profils électriques",
        id: "38",
        visible: false,
        minScale: 9244648,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s01-gaia-voie-v2-0039-ec1",
            title: "Engins classe 1 (1000 A)",
            id: "39",
            visible: false,
            minScale: 9244648,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0040-ec2",
            title: "Engins classe 2 (1600 A)",
            id: "40",
            visible: false,
            minScale: 9244648,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0041-ec3",
            title: "Engins classe 3 (2500 A)",
            id: "41",
            visible: false,
            minScale: 9244648,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0042-ec4",
            title: "Engins classe 4 (4000 A)",
            id: "42",
            visible: false,
            minScale: 9244648,
            maxScale: 70,
          },
          {
            uid: "service-s01-gaia-voie-v2-0043-ec5",
            title: "Engins classe 5 (5000 A)",
            id: "43",
            visible: false,
            minScale: 9244648,
            maxScale: 70,
          },
        ],
      },
    ],
  },
  {
    uid: "service-s02-gaia-ligne-v2",
    title: "Infrastructures ligne",
    url: "/arcgis/rest/services/gaiav2/socle_gaia_ligne_v2/MapServer",
    sublayers: [
      {
        uid: "service-s02-gaia-ligne-v2-0000-nl",
        title: "Noeuds Lignes",
        id: "0",
        visible: false,
        minScale: 144447,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0001-ad",
            title: "Anomalie de distance",
            id: "1",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0002-ar",
            title: "Anomalie de repère",
            id: "2",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0003-noeuds",
            title: "Noeuds",
            id: "3",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0004-sar",
        title: "Sections d'Accès au Réseau",
        id: "4",
        visible: false,
        minScale: 144447,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0005-pr",
            title: "PR extrémité",
            id: "5",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0006-sar",
            title: "SAR",
            id: "6",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0007-saf",
        title: "Secteurs d'Activité ferroviaire",
        id: "7",
        visible: false,
        minScale: 144447,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0008-ch",
            title: "Chantiers",
            id: "8",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0009-ep",
            title: "Embranchements particuliers",
            id: "9",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0010-eim",
            title: "Etablissements industriels ou de maintenance",
            id: "10",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0011-et",
            title: "Etablissements traction",
            id: "11",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0012-triage",
            title: "Triages",
            id: "12",
            visible: false,
            minScale: 144447,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0013-pe",
        title: "Points Encadrants",
        id: "13",
        visible: true,
        minScale: 288895,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0014-acces",
            title: "Accès",
            id: "14",
            visible: true,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0015-gare",
            title: "Gare",
            id: "15",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0016-ptr",
            title: "Ponts-rails",
            id: "16",
            visible: true,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0017-ptrl",
            title: "Ponts-rails linéaires",
            id: "17",
            visible: true,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0018-ptr",
            title: "Ponts-routes",
            id: "18",
            visible: true,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0019-rk",
            title: "Repères kilométriques (RK)",
            id: "19",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0020-tun",
            title: "Tunnels",
            id: "20",
            visible: true,
            minScale: 18055,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0021-tunl",
            title: "Tunnels linéaires",
            id: "21",
            visible: true,
            minScale: 18055,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0022-pn",
        title: "Passages à Niveau",
        id: "22",
        visible: true,
        minScale: 288895,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0023-pnd",
            title: "Passages à Niveau (détail)",
            id: "23",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0024-pnipsn",
            title: "Passages à niveau IPSN",
            id: "24",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0025-if",
        title: "Installations Fixes",
        id: "25",
        visible: false,
        minScale: 288895,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0026-ct",
            title: "Centre technique",
            id: "26",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0027-dbc",
            title: "Détecteurs de boîtes chaudes",
            id: "27",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0028-ps",
            title: "Passages souterrains",
            id: "28",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0029-psl",
            title: "Passerelles",
            id: "29",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0030-poste",
            title: "Postes",
            id: "30",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0031-ss",
            title: "Sous-stations",
            id: "31",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0032-sr",
            title: "Stations radio",
            id: "32",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0033-tvpp",
            title: "Traversées de voies pour piétons",
            id: "33",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0034-zncc",
            title: "Zones neutres (CC)",
            id: "34",
            visible: true,
            minScale: 288895,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0035-pr",
        title: "PR",
        id: "35",
        visible: true,
        minScale: 288895,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0036-pr",
            title: "PR",
            id: "36",
            visible: false,
            minScale: 288895,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0037-loc",
            title: "Localisateur",
            id: "37",
            visible: false,
            minScale: 288895,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0038-lp",
        title: "Lignes Principales",
        id: "38",
        visible: true,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0039-lp",
            title: "Lignes Principales",
            id: "39",
            visible: true,
            minScale: 18489297,
            maxScale: 144447,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0040-l",
            title: "Lignes",
            id: "40",
            visible: true,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0041-dl",
        title: "Découpages des Lignes",
        id: "41",
        visible: true,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0042-cr",
            title: "Canal Radio",
            id: "42",
            visible: true,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0043-catl",
            title: "Catégories des lignes",
            id: "43",
            visible: false,
            minScale: 577790,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0044-cwa",
            title: "Charge des wagons admissibles",
            id: "44",
            visible: false,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0045-cec",
            title: "Classement de l'entretien caténaire",
            id: "45",
            visible: false,
            minScale: 577790,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0046-cad",
            title: "Clôtures à droite",
            id: "46",
            visible: false,
            minScale: 1155581,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0047-cag",
            title: "Clôtures à gauche",
            id: "47",
            visible: false,
            minScale: 1155581,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0048-cdl",
            title: "Consigne de Ligne",
            id: "48",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0049-emd",
            title: "Entretien matières dangereuses",
            id: "49",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0050-glvoh",
            title: "Gabarit limite voyageurs des obstacles hauts",
            id: "50",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0051-emd",
            title: "Gabarit limite fret des obstacles hauts",
            id: "51",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0052-gd",
            title: "Groupes Demaux",
            id: "52",
            visible: true,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0053-guic",
            title: "Groupes UIC",
            id: "53",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0054-kvb",
            title: "KVB",
            id: "54",
            visible: false,
            minScale: 1155581,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0055-lr",
            title: "Lignes régulées",
            id: "55",
            visible: false,
            minScale: 1155581,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0056-mc",
            title: "Mode de cantonnement",
            id: "56",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0057-me",
            title: "Mode d'électrification",
            id: "57",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0058-otd",
            title: "Ouvrage en terre à droite",
            id: "58",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0059-otg",
            title: "Ouvrage en terre à gauche",
            id: "59",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0060-rsl",
            title: "Radio sol-train",
            id: "60",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0061-re",
            title: "Régime d'exploitation",
            id: "61",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0062-rt",
            title: "Renseignements Techniques",
            id: "62",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0063-rgc",
            title: "Responsable Graphique Circulation ",
            id: "63",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0064-sl",
            title: "Statut des lignes",
            id: "64",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0065-tm",
            title: "Trafic marchandises",
            id: "65",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0066-tre",
            title: "Trafic rapide et express",
            id: "66",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0067-tter",
            title: "Trafic TER",
            id: "67",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0068-tt",
            title: "Trafic Transilien",
            id: "68",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0069-ts",
            title: "Type de suivi",
            id: "69",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0070-vml",
            title: "Vitesse max ligne",
            id: "70",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0071-cexp",
        title: "Compétences Exploitations",
        id: "71",
        visible: false,
        minScale: 144447,
        maxScale: 1128,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0072-ceici",
            title: "Compétences EIC infrastructure",
            id: "72",
            visible: false,
            minScale: 144447,
            maxScale: 1128,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0072-ccogcr",
            title: "Compétences COGC Régulation",
            id: "73",
            visible: false,
            minScale: 144447,
            maxScale: 1128,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0074-cm",
        title: "Compétences Maintenances",
        id: "74",
        visible: false,
        minScale: 144447,
        maxScale: 282,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0075-ebat",
            title: "Etablissements BAT",
            id: "75",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0076-ecat",
            title: "Etablissements CAT",
            id: "76",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0077-ealm",
            title: "Etablissements EALM",
            id: "77",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0078-eealr",
            title: "Etablissements EALR",
            id: "78",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0079-eee",
            title: "Etablissements EE",
            id: "79",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0080-eoa",
            title: "Etablissements OA",
            id: "80",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0081-eseg",
            title: "Etablissements SEG",
            id: "81",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0082-eset",
            title: "Etablissements SET",
            id: "82",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0083-esm",
            title: "Etablissements SM",
            id: "83",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0084-evoie",
            title: "Etablissements VOIE",
            id: "84",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0085-upbat",
            title: "UP BAT",
            id: "85",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0086-upcat",
            title: "UP CAT",
            id: "86",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0087-upealm",
            title: "UP EALM",
            id: "87",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0088-upealr",
            title: "UP EALR",
            id: "88",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0089-upee",
            title: "UP EE",
            id: "89",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0090-upoa",
            title: "UP OA",
            id: "90",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0091-upseg",
            title: "UP SEG",
            id: "91",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0092-upset",
            title: "UP SET",
            id: "92",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0093-upsm",
            title: "UP SM",
            id: "93",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0094-upvoie",
            title: "UP VOIE",
            id: "94",
            visible: false,
            minScale: 144447,
            maxScale: 282,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0095-pex",
        title: "Particularités d'Exploitation",
        id: "95",
        visible: false,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0096-pex",
            title: "Particularités d'Exploitation",
            id: "96",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0097-cat",
        title: "Caténaires",
        id: "97",
        visible: false,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0098-ecat",
            title: "Elements caténaires",
            id: "98",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0099-seg",
        title: "Segmentations",
        id: "99",
        visible: false,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0100-seggp",
            title: "Segment de gestion ponctuel",
            id: "100",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0101-segs",
            title: "Segment stratégique",
            id: "101",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0102-seg",
            title: "Segments",
            id: "102",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0103-typeent",
        title: "Type d'entreprise",
        id: "103",
        visible: false,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0104-gerant",
            title: "Gérant",
            id: "104",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0105-prop",
            title: "Propriétaire",
            id: "105",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0106-rdgt",
            title: "Responsable de gestion du trafic",
            id: "106",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0107-rde",
            title: "Responsable de l'entretien",
            id: "107",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0108-ddl",
        title: "Débit des Lignes",
        id: "108",
        visible: false,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0109-ddl",
            title: "Débit des lignes",
            id: "109",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0110-per",
        title: "Périmètres",
        id: "110",
        visible: false,
        minScale: 18489297,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s02-gaia-ligne-v2-0111-cl",
            title: "Commune linéaire",
            id: "111",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0112-dl",
            title: "Département linéaire",
            id: "112",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0113-ral",
            title: "Régions Administratives linéaires",
            id: "113",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0114-rrffl",
            title: "Régions RFF linéaires",
            id: "114",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
          {
            uid: "service-s02-gaia-ligne-v2-0115-rsncfl",
            title: "Régions SNCF linéaires",
            id: "115",
            visible: false,
            minScale: 18489297,
            maxScale: 70,
          },
        ],
      },
      {
        uid: "service-s02-gaia-ligne-v2-0116-pkloc",
        title: "PK Localisation",
        id: "116",
        visible: true,
        minScale: 18055,
        maxScale: 70,
        sublayers: [],
      },
    ],
  },
  {
    uid: "service-s03-territoires",
    title: "Territoires",
    type: "dynamic",
    url: "/arcgis/rest/services/sigext/socle_sigext_territoires/MapServer",
    sublayers: [
      {
        uid: "service-s03-territoires-0000-tm",
        title: "Territoires métiers",
        id: "0",
        visible: true,
        minScale: 18489297,
        maxScale: 72223,
        sublayers: [
          {
            uid: "service-s03-territoires-0001-rtp",
            title: "Régions TP",
            id: "1",
            visible: false,
            minScale: 18489297,
            maxScale: 72223,
          },
          {
            uid: "service-s03-territoires-0002-rrff",
            title: "Régions RFF",
            id: "2",
            visible: false,
            minScale: 18489297,
            maxScale: 72223,
          },
          {
            uid: "service-s03-territoires-0003-reic",
            title: "Régions EIC",
            id: "3",
            visible: false,
            minScale: 18489297,
            maxScale: 72223,
          },
          {
            uid: "service-s03-territoires-0004-rsncf",
            title: "Régions SNCF",
            id: "3",
            visible: true,
            minScale: 18489297,
            maxScale: 72223,
          },
        ],
      },
      {
        uid: "service-s03-territoires-0005-ta",
        title: "Territoires Administratifs",
        id: "5",
        visible: true,
        minScale: 73957190,
        maxScale: 70,
        sublayers: [
          {
            uid: "service-s03-territoires-0006-lm",
            title: "Limites hexagonales",
            id: "6",
            visible: false,
            minScale: 73957190,
            maxScale: 72223,
          },
          {
            uid: "service-s03-territoires-0007-ra",
            title: "Régions Administratives",
            id: "7",
            visible: true,
            minScale: 73957190,
            maxScale: 72223,
          },
          {
            uid: "service-s03-territoires-0008-dept",
            title: "Départements",
            id: "8",
            visible: true,
            minScale: 4622324,
            maxScale: 144447,
          },
          {
            uid: "service-s03-territoires-0009-com",
            title: "Communes",
            id: "9",
            visible: true,
            minScale: 4622324,
            maxScale: 70,
          },
        ],
      },
    ],
  },
];
