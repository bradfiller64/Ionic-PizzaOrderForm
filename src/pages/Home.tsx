import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [present] = useIonToast();

  const toppings: string[] = [
    "Pepperoni",
    "Sausage",
    "Extra Cheese",
    "Bell Peppers",
    "Onions",
    "Mushroom",
    "Pineapple",
    "Black Olives"
  ];

  const displayToppings = () => {
    return toppings.map((top) => {
      return (
        <IonList>
          <IonItem key={top}>
            <IonLabel>{top}</IonLabel>
            <IonCheckbox slot="end" color="success" ></IonCheckbox>
          </IonItem>
        </IonList>
      );
    });
  }

  const orderPlaced = () => {
    present({
      color: 'dark',
      position: 'bottom',
      message: 'Order Placed!',
      duration: 2000
    });
  }

  return (
    <IonPage>
      <IonHeader id='title'>
        <IonToolbar color="success">
          <IonTitle>Order Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1><b>Enter Your Order Details</b></h1>
        <IonList>

          <IonItem lines="inset">
            <IonLabel position="floating">Name:</IonLabel>
            <IonInput type="text" placeholder="Enter name"></IonInput>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel position="floating">Phone Number:</IonLabel>
            <IonInput type="number" placeholder="Enter Phone Number"></IonInput>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Pizza Size:</IonLabel>
            <IonSelect placeholder="Select Size">
              <IonSelectOption value="small">Small</IonSelectOption>
              <IonSelectOption value="medium">Medium</IonSelectOption>
              <IonSelectOption value="large">Large</IonSelectOption>
              <IonSelectOption value="XL">Extra Large</IonSelectOption>
            </IonSelect>
          </IonItem>

          <br></br>

        </IonList>
        <IonList>
          <IonListHeader className='listhead'>
            <IonLabel font-size="1.5em">Select Toppings</IonLabel>
          </IonListHeader>
          {displayToppings()}
        </IonList>
        <IonButton onClick={orderPlaced} expand="block" color="success">Place Order</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
