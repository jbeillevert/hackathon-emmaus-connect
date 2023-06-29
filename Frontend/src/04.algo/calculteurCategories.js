
const categories = [
    {name: "Catégorie D", range: [0, 179]},
    {name: "Catégorie C", range: [180, 249]},
    {name: "Catégorie B", range: [250, 349]},
    {name: "Catégorie A", range: [350, 499]},
    {name: "Catégorie Premium", range: [500, 800]},
]



let scoreTelephone = 0 



function calculateurCategories(systeme, debloque, stockage, ram, ecran, reseau, anciennete, etat) {

    // evaluer le systeme d'exploitation
    if (systeme === "iOS") {
        scoreTelephone += 80
    }

    // evaluer le débloquage opérateur 
    if (debloque === "oui") {
        scoreTelephone += 50
    }

    // evaluer la valeur de stockage du téléphone
    switch (stockage) {
        case "16":
            scoreTelephone += 0
            break
        case "32":
            scoreTelephone += 10
            break
        case "64":
            scoreTelephone += 50
            break
        case "128":
            scoreTelephone += 80
            break
        case "256":
            scoreTelephone += 90
            break
        case "512":
            scoreTelephone += 90
            break
        case "1000":
            scoreTelephone += 100
            break
        default:
            break;
    }

    // evaluer la ram
    switch (ram) {
        case "2":
            scoreTelephone += 0
            break
        case "3":
            scoreTelephone += 10
            break
        case "4":
            scoreTelephone += 20
            break
        case "6":
            scoreTelephone += 60
            break
        case "8":
            scoreTelephone += 70
            break
        case "12":
            scoreTelephone += 90
            break
        case "16":
            scoreTelephone += 100
            break
        default:
            break;
    }

    
    // evaluer la taille de l'ecran
    switch (ecran) {
        case "4-5":
            scoreTelephone += 0
            break
        case "5-6":
            scoreTelephone += 30
            break
        case "6-7":
            scoreTelephone += 80
            break
        case "7-8":
            scoreTelephone += 100
            break
        case "8+":
            scoreTelephone += 100
            break
        default:
            break;
    }
    
    // evaluer la connectivité
    if (reseau === "5G") {
        scoreTelephone += 100
    }
    
    // evaluer l'anciennete du telephone
    switch (anciennete) {
        case "3-5":
            scoreTelephone += 0
            break
        case "1-3":
            scoreTelephone += 30
            break
        case "6m-1":
            scoreTelephone += 50
            break
        case "3-6m":
            scoreTelephone += 70
            break
        case "-3m":
            scoreTelephone += 80
            break
        case "neuf":
            scoreTelephone += 100
            break
        default:
            break;
    }

        // evaluer la taille de l'ecran
        switch (etat) {
            case "correct":
                scoreTelephone += 0
                break
            case "excellent":
                scoreTelephone += 70
                break
            case "parfait":
                scoreTelephone += 100
                break
            default:
                break;
        }


    // trouver le rang
    const rank = categories.find(data => {
        if (scoreTelephone >= data.range[0] && scoreTelephone < data.range[1]) return data.name
    })

    console.log("score telephone : ", scoreTelephone);
    console.log("rang telephone : ", rank.name);
}







// systeme : iOS || Android

// debloque : oui || non

// stockage : 16 || 32 || 64 || 128 || 256 || 512 || 1000

// ram : 2 || 3 || 4 || 6 || 8 || 12 || 16

// ecran : 4-5 || 5-6 || 6-7 || 7-8 || 8+

// reseau : 4G || 5G

// anciennete : 3-5 || 1-3 || 6m-1 || 3-6m || -3m || neuf

// etat : correct || excellent || parfait


//iphone 12 128go
calculateurCategories("iOS", "oui", "128", "4", "6-7", "5G", "1-3", "correct")


//iphone 13 128go
// calculateurCategories("iOS", "oui", "128", "4", "6-7", "5G", "1-3", "parfait")


// samsung galaxy s10
// calculateurCategories("Android", "oui", "128", "8", "6-7", "4G", "3-5", "correct")