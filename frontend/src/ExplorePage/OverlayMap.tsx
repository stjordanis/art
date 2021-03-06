import { ArtObject } from "../Shared/ArtSchemas";
import base64url from "base64url";

type stringMapping = {
    [key: string]: string
}

export const interpretationMapping: stringMapping = {
    'SK-A-3064': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-paintings.jpg',
    'SK-A-3905': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-french.jpg',
    'SK-A-406': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-german.jpg',
    'SK-A-4020': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-italian.jpg',
    'SK-A-1048': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-british.jpg',
    'SK-C-1183': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-belgian.jpg',
    'RP-F-F01161-N': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-japanese.jpg',
    'RP-T-2005-170': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-american.jpg',
    'AK-RAK-2014-6': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-chinese.jpg',
    'SK-A-3779': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-southeast_asian.jpg',
    'RP-T-2016-11-2': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-european_general.jpg',
    'RP-F-F01184-AR': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-roman.jpg',
    'SK-A-4342': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-swiss.jpg',
    'RP-P-1936-453': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-austrian.jpg',
    'RP-P-1920-2701': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-czech.jpg',
    'SK-A-2963': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-spanish.jpg',
    'RP-T-1914-17-69': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-african.jpg',
    'SK-A-4221': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-various.jpg',
    'RP-F-00-7520': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-prints.jpg',
    'RP-T-00-1180': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-drawings.jpg',
    'BK-1975-35': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-ceramics.jpg',
    'BK-1961-111': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-textiles.jpg',
    'BK-14649-B': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-accessories.jpg',
    'BK-C-1994-1': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-sculptures.jpg',
    'SK-A-5049': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-glass.jpg',
    'NG-2016-50-2': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-paper.jpg',
    'AK-MAK-9': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-musical_instruments.jpg',
    'SK-A-233': 'https://mmlsparkdemo.blob.core.windows.net/rijks/shap/demo2-uncategorized.jpg'
};

export function getInterpretation(artObject: ArtObject): string | null {
    if (artObject.id == null) {
        return null
    } else {
        return interpretationMapping[base64url.decode(artObject.id)]
    }
}