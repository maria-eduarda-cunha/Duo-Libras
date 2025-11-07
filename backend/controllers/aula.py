from flask import Blueprint, jsonify, request
from models.aula import Aula
import traceback

aula_bp = Blueprint('aula_bp', __name__)

# 🔹 Listar todos os módulos
@aula_bp.route('/', methods=['GET'])
def get_all_aulas():
    try:
        aulas = Aula.objects()
        return jsonify([
    {
        "id": str(a.id),
        "aula": a.aula,
        "modulo": a.modulo,
        "pergunta1": getattr(a, "pergunta1", ""),
        "respostas1": getattr(a, "respostas1", {}),
        "gif1": getattr(a, "gif1", ""),
        "pergunta2": getattr(a, "pergunta2", ""),
        "respostas2": getattr(a, "respostas2", {}),
        "gif2": getattr(a, "gif2", ""),
        "pergunta3": getattr(a, "pergunta3", ""),
        "respostas3": getattr(a, "respostas3", {}),
        "gif3": getattr(a, "gif3", "")
    } for a in aulas
]), 200
    except Exception as err:
        print("❌ ERRO AO BUSCAR AULAS:")
        traceback.print_exc()
        return jsonify({"success": False, "error": str(err)}), 500

# 🔹 Buscar pergunta específica de um módulo
@aula_bp.route('/<modulo>/<int:numero>', methods=['GET'])
def get_aula_by_modulo_and_numero(modulo, numero):
    try:
        aula_doc = Aula.objects(modulo=modulo).first()
        if not aula_doc:
            return jsonify({"error": "Módulo não encontrado"}), 404

        pergunta_key = f"pergunta{numero}"
        respostas_key = f"respostas{numero}"
        gif_key = f"gif{numero}"

        if not hasattr(aula_doc, pergunta_key):
            return jsonify({"error": "Pergunta não encontrada"}), 404

        return jsonify({
            "id": str(aula.id),
            "aula": aula.aula,
            "modulo": aula.modulo,
            "pergunta1": getattr(aula, "pergunta1", ""),
            "respostas1": getattr(aula, "respostas1", {}),
            "gif1": getattr(aula, "gif1", ""),
            "pergunta2": getattr(aula, "pergunta2", ""),
            "respostas2": getattr(aula, "respostas2", {}),
            "gif2": getattr(aula, "gif2", ""),
            "pergunta3": getattr(aula, "pergunta3", ""),
            "respostas3": getattr(aula, "respostas3", {}),
            "gif3": getattr(aula, "gif3", "")
        }), 200


    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500
