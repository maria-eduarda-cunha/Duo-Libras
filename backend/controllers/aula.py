from flask import Blueprint, jsonify, request
from models.aula import Aula
import traceback

aula_bp = Blueprint('aula_bp', __name__)

# 🔹 Listar todas as aulas
@aula_bp.route('/', methods=['GET'])
def get_all_aulas():
    try:
        aulas = Aula.objects()
        return jsonify([
            {
                "id": str(a.id),
                "aula": a.aula,
                "modulo": a.modulo,
                "pergunta1": a.pergunta1,
                "respostas1": a.respostas1,
                "gif": a.gif
            } for a in aulas
        ]), 200
    except Exception as err:
        print("❌ ERRO AO BUSCAR AULAS:")
        traceback.print_exc()
        return jsonify({"success": False, "error": str(err)}), 500


# 🔹 Buscar aula por ID
@aula_bp.route('/<id>', methods=['GET'])
def get_aula_by_id(id):
    try:
        aula = Aula.objects(id=id).first()
        if not aula:
            return jsonify({"success": False, "msg": "Aula não encontrada"}), 404

        return jsonify({
            "id": str(aula.id),
            "aula": aula.aula,
            "modulo": aula.modulo,
            "pergunta1": aula.pergunta1,
            "respostas1": aula.respostas1,
            "gif": aula.gif
        }), 200
    except Exception as err:
        print("❌ ERRO AO BUSCAR AULA:")
        traceback.print_exc()
        return jsonify({"success": False, "error": str(err)}), 500