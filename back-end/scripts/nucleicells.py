from joblib import load
import argparse
import os

# Obtener la ruta absoluta a la carpeta que contiene el script actual
current_folder = os.path.dirname(os.path.abspath(__file__))

# Combinar la ruta a la carpeta con el nombre del archivo
file_path = os.path.join(current_folder, 'nucleicellsModel.joblib')
#Load serialized object from .joblib
model = load(file_path)

parser = argparse.ArgumentParser()
parser.add_argument("clumpThickness", help="clumpThickness", type=str)
parser.add_argument("shapeUniformity", help="shapeUniformity", type=str)
parser.add_argument("marginalAdhesion", help="marginalAdhesion", type=str)
parser.add_argument("epithelialSize", help="epithelialSize", type=str)
parser.add_argument("bareNucleoli", help="bareNucleoli", type=str)
parser.add_argument("blandChromatin", help="blandChromatin", type=str)
parser.add_argument("normalNucleoli", help="normalNucleoli", type=str)
parser.add_argument("mitosis", help="mitosis", type=str)

args = parser.parse_args()

#Load data
x_new = [[float(args.clumpThickness), float(args.shapeUniformity), float(args.marginalAdhesion),
        float(args.epithelialSize), float(args.bareNucleoli), float(args.blandChromatin),
        float(args.normalNucleoli), float(args.mitosis)]]

y_pred = model.predict(x_new)

print(y_pred[0])
