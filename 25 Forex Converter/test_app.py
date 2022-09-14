from unittest import TestCase
from app import app


class FlaskTestCase(TestCase):
    def test_site(self):
        with app.test_client() as client:
            resp = client.get("/")
            html = resp.get_data(as_text=True)
            self.assertEqual(resp.status_code, 200)
            self.assertIn("<h1>Forex Converter</h1>", html)

    def test_redirect(self):
        with app.test_client() as client:
            resp = client.post(
                "/index/convert",
                data=dict(convert_from="USD", convert_to="USD", amount="1"),
            )
            html = resp.get_data(as_text=True)
            self.assertEqual(resp.status_code, 302)
