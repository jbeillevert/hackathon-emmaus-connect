import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const Estimation = ({estimateOpen, setEstimateOpen, brand, model, resultAlgo, system, bloc, storage, memory, screen, network, seniority, state}) => {

    const [showPdf, setShowPdf] = useState(false);
    const [effect, setEffect] = useState("");

    // const estimateCloseHandler = () => {
       
    //     setTimeout(() => {
    //         setEstimateOpen(estimateOpen => !estimateOpen)
    //       }, 500); 
    //       setEffect("animate-jump-out animate-once animate-duration-[400ms] animate-ease-out")
    // }

    const estimateCloseHandler = () => {
        setEstimateOpen(!estimateOpen)

    }



    const handlePdfGenerate = () => {
        console.log("Generating PDF...");
        setShowPdf(true);
    }

    let etiquette;

    function etiquetteDynamique(resultAlgo) {

        switch (resultAlgo) {
            case "Catégorie D":
                etiquette = (
                    <div className='bg-red-500 py-3 px-5 rounded-lg w-fit'>
                        <h3 className='text-white'>{resultAlgo}</h3>
                    </div>
                )
                break;
            case "Catégorie C":
                etiquette = (
                    <div className='bg-[#EF9207] py-3 px-5 rounded-lg w-fit'>
                        <h3 className='text-white'>{resultAlgo}</h3>
                    </div>
                )
                break;
            case "Catégorie B":
                etiquette = (
                    <div className='bg-yellow-500 py-3 px-5 rounded-lg w-fit'>
                        <h3 className='text-white'>{resultAlgo}</h3>
                    </div>
                )
                break;
            case "Catégorie A":
                etiquette = (
                    <div className='bg-[#00D315] py-3 px-5 rounded-lg w-fit'>
                        <h3 className='text-white'>{resultAlgo}</h3>
                    </div>
                )
                break;
            case "Catégorie Premium":
                etiquette = (
                    <div className='bg-[#0094d3] py-3 px-5 rounded-lg w-fit'>
                        <h3 className='text-white'>{resultAlgo}</h3>
                    </div>
                )
                break;
            default:
                break;
        }

        return etiquette
    }

    const getDynamicStyles = (resultAlgo) => {
        switch (resultAlgo) {
            case "Catégorie D":
                return { backgroundColor: "red", padding: 10, borderRadius: 10  };
            case "Catégorie C":
                return { backgroundColor: "#EF9207", padding: 10, margin: 10, borderRadius: 10 };
            case "Catégorie B":
                return { backgroundColor: "yellow", padding: 10, margin: 10, borderRadius: 10 };
            case "Catégorie A":
                return { backgroundColor: "#00D315", padding: 10, margin: 10, borderRadius: 10 };
            case "Catégorie Premium":
                return { backgroundColor: "#0094d3", padding: 10, margin: 10, borderRadius: 10 };
            default:
                return {};
        }
    }

    const styles = StyleSheet.create({
        page: { padding: 30 },
        title: { fontSize: 24, marginBottom: 10 },
        didier: { fontSize: 16, marginBottom: 10 },
        colorCircle: { textAlign: "center" },
        table: { display: "table", width: "auto", margin: "auto" },
        div: {flexDirection: "row", gap: "100px"},
        row: { flexDirection: "column", borderBottom: '1px solid black',}, // define a minimum width for the row
        cell: { minWidth: 75, justifyContent: "center", alignItems: "center", padding: 5 },  // define a minimum width for the cells
      });


      const MyDocument = () => {
          const dynamicStyles = getDynamicStyles(resultAlgo);
          return (
            <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>{brand} {model}</Text>
                <View >
                    <Text id='etiquette' style={dynamicStyles}>{resultAlgo}</Text>
                    {/* <Text style={styles.didier}>Tarifs entre 100 € et 200 €</Text> */}
                    
                </View>
                <View style={styles.table}>
                    <div style={styles.div} >
                        <View style={styles.row}>
                            <Text style={styles.cell}>Système d'exploitation</Text>
                            <Text style={styles.cell}>Débloqué tout opérateur</Text>
                            <Text style={styles.cell}>Disque dur</Text>
                            <Text style={styles.cell}>Mémoire vive(RAM)</Text>
                            <Text style={styles.cell}>Taille d'écran</Text>
                            <Text style={styles.cell}>Connectivité</Text>
                            <Text style={styles.cell}>Date de sortie</Text>
                            <Text style={styles.cell}>Etat</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cell}>{system}</Text>
                            <Text style={styles.cell}>{bloc}</Text>
                            <Text style={styles.cell}>{storage} Go</Text>
                            <Text style={styles.cell}>{memory} Go</Text>
                            <Text style={styles.cell}>{screen} Pouces</Text>
                            <Text style={styles.cell}>{network}</Text>
                            <Text style={styles.cell}>{seniority} ans</Text>
                            <Text style={styles.cell}>{state}</Text>
                        </View>
                    </div>
                </View>
            </Page>
            </Document>

          )

      }

      



    return (
        estimateOpen && 
            (<div  className={`animate-jump-in animate-once animate-duration-[200ms]   animate-ease-out z-10 shadow-xl bg-white rounded-md absolute  gap-6 flex flex-col justify-center items-center w-[600px] h-[400px] p-10`}>
                <div>
                    <h2 className='sukui-h2'>Estimation :</h2>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='sukui-h4'>{brand} {model}</h4>
                    <div>
                        {etiquetteDynamique(resultAlgo)}
                    </div>
                    {/* <p className='sukui-p'>Prix suggéré : de € à €</p> */}
                </div>
                <div>
                    <button  onClick={handlePdfGenerate}  className=' text-teal-700 text-sm border-b border-solid hover:text-teal-400'>Télécharger en pdf</button>
                </div>
            <p className='sukui-h4 absolute top-3 right-4 hover: cursor-pointer text-teal-700 hover:text-teal-400 ' onClick={estimateCloseHandler}>X</p>
            {showPdf &&
                <div className='absolute top-0 left-0 w-full h-full z-50 bg-white'>
                    {console.log('Rendering PDF...')}
                    <PDFViewer style={{ width: '100%', height: '100%' }}>
                        <MyDocument />
                    </PDFViewer>
                </div>
            }
        </div>)
    );
};

export default Estimation;