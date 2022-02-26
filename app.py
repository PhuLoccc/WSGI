import sys
sys.path.append('./View')
print(sys.path)
from OpenSSL import SSL
from flask import Flask, render_template
from index import index
app = Flask(__name__,static_folder="Web",template_folder="Web/templates",static_url_path="")
app.register_blueprint(index, url_prefix = "/")

if __name__ == "__main__":
     #app.run(host="192.168.1.9", port=5000, ssl_context=('cert.pem', 'key.pem'))
     app.run(host="172.20.10.14", port=80)