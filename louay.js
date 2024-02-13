const express = require('express')
const app = express()
const port = 300
app.use(express.json())
app.listen(5000, ()=>{
    console.log(`Server is running on port ${port}`)





//déclaration d'un tableau 
const voitures = [
    { id:1,
      marque: 'Renault',
      modele: 'Clio',
      annee: 2015,
    },
    { id:2,
      marque: 'Peugeot',
      modele: '208',
      annee: 2018,
    },
        {id:3,
        marque: 'Toyota',
        modele: 'Yaris',
        annee: 2012,
    },
  ];


 //ajout d'une voiture
app.post('/voitures', (req, res) => {
    const voiture = {
        id:req.body.id,
        marque: req.body.marque,
        modele: req.body.modele,
        annee: req.body.annee,
    };

    voitures.push(voiture);
    res.status(201).json(voiture);
})


//affichage 

app.get('/voitures', (req, res) => {
    res.status(200).json(voitures);
});



//supprimer une voiture

app.delete('/voitures/:id', (req, res) => {
    const voiture = voitures.find(voiture => voiture.id === parseInt(req.params.id));

    if (!voiture) {
        return res.status(404).json({ message: 'Voiture non trouvée' });
    }

    const index = voitures.indexOf(voiture);
    voitures.splice(index, 1);

    res.status(200).json({ message: 'Voiture supprimée' });
});





//modification voiture avec id

app.put('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(voiture => voiture.id === id);
  
    if (!voiture) {
      return res.status(404).json({ message: 'Voiture non trouvée' });
    }
  
    voiture.marque = req.body.marque || voiture.marque;
    voiture.modele = req.body.modele || voiture.modele;
    voiture.annee = req.body.annee || voiture.annee;
  
    res.status(200).json(voiture);
  });




  






})
