import argparse
import os
import cv2
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np

# Obtener la ruta absoluta a la carpeta que contiene el script actual
current_folder = os.path.dirname(os.path.abspath(__file__))

# Combinar la ruta a la carpeta con el nombre del archivo
file_path = os.path.join(current_folder, 'ultrasoundModel.h5')
#Load serialized object from .joblib
model = load_model(file_path)

parser = argparse.ArgumentParser()
parser.add_argument("image_path", help="ruta a la imagen", type=str)
args = parser.parse_args()

# Cargar la imagen y convertirla a un array de NumPy
pil_img = load_img(args.image_path, target_size=(128, 128))
img_array = img_to_array(pil_img)

# Normalizar la imagen
img_array = img_array / 255.0

# Agregar una dimensión adicional al array de la imagen
img_array = img_array[np.newaxis, ...]

# Realizar la predicción con el modelo
probs = model.predict(img_array)

# La clase con la probabilidad más alta es la predicción
pred_class = np.argmax(probs)

print(pred_class)