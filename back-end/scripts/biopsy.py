from joblib import load
import argparse
import os

# Obtener la ruta absoluta a la carpeta que contiene el script actual
current_folder = os.path.dirname(os.path.abspath(__file__))

# Combinar la ruta a la carpeta con el nombre del archivo
file_path = os.path.join(current_folder, 'biopsyModel.joblib')
#Load serialized object from .joblib
model = load(file_path)

parser = argparse.ArgumentParser()
parser.add_argument("radiusMean", help="Radio Mean", type=str)
parser.add_argument("textureMean", help="Texture Mean", type=str)
parser.add_argument("smoothnessMean", help="Smooth Mean", type=str)
parser.add_argument("compactnessMean", help="Compactivity Mean", type=str)
parser.add_argument("symmetryMean", help="Simmetry Mean", type=str)
parser.add_argument("fractalDimensionMean", help="Fractal Dimention Mean", type=str)
parser.add_argument("radiusSE", help="Radio SE", type=str)
parser.add_argument("textureSE", help="Texture SE", type=str)
parser.add_argument("smoothnessSE", help="Smooth SE", type=str)
parser.add_argument("compactnessSE", help="Compactivity SE", type=str)
parser.add_argument("concavePointsSE", help="Concave Points SE", type=str)
parser.add_argument("symmetrySE", help="Simmetry SE", type=str)
parser.add_argument("symmetryWorst", help="Worst Simmetry", type=str)
parser.add_argument("fractalDimensionWorst", help="Worst Fractal Dimention", type=str)

args = parser.parse_args()

#Load data
x_new = [[args.radiusMean, float(args.textureMean), float(args.smoothnessMean), float(args.compactnessMean), float(args.symmetryMean), float(args.fractalDimensionMean),
    float(args.radiusSE), float(args.textureSE), float(args.smoothnessSE), float(args.compactnessSE), float(args.concavePointsSE), float(args.symmetrySE),
    float(args.symmetryWorst), float(args.fractalDimensionWorst)]]

y_pred = model.predict(x_new)

print(y_pred[0])