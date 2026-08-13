/* ═══════════════════════════════════════════════════════════════════════════
   ESCUDO INSTITUCIONAL — vacío a propósito.

   En la app de una estación este archivo traía SU escudo (247 KB de base64).
   En el producto no puede: le pondría el emblema de una institución a todos los
   cuerpos que instalen la app.

   Cómo funciona ahora:
     1º  El escudo que el cuerpo configuró (INSTITUCION.escudoUrl).
     2º  Lo que haya acá.
     3º  Nada.

   "Nada" es una respuesta aceptable. Un informe sin escudo se entiende; uno con
   el escudo de otra institución es un documento que no corresponde a quien lo
   emite — y eso, en un acta oficial, es un problema de verdad.

   ⚠️ Si algún día se pone un emblema genérico acá, que sea genérico DE VERDAD
   (una silueta, un símbolo del gremio), nunca el de un cuerpo concreto.

   app.js ya contempla que estas constantes no existan (`typeof ... !== 'undefined'`),
   así que dejarlas vacías no rompe nada.
   ═══════════════════════════════════════════════════════════════════════════ */

const LOGO_SMALL = "";
const LOGO_BIG   = "";
