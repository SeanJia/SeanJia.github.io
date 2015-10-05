
/* deploy the Knights' Tour JavaFx App */
function deployIt() {
    dtjava.embed(
        {         id: "myApp",
                 url: "KnightsTour.jnlp",
               width: 680,
              height: 645,
         placeholder: "kt-placeholder"
        },
        { javafx: "2.1+" },
        {}
                );
}

dtjava.addOnloadCallback(deployIt);