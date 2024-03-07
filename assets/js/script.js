function calcular_notas () {
//HTML
const pregunta_1a_nota_html = 'ingrese la 1a nota de HTML';
const nota1_html = prompt('Ingrese la 1a de HTML');
$('#1a_nota_html').append(nota1_html);

const pregunta_2a_nota_html = 'Ingrese la 2a nota de HTML';
const nota2_html = prompt('Ingrese la 2a nota de HTML');
$('#2a_nota_html').append(nota2_html);

const pregunta_3a_nota_html = 'Ingrese la 3a nota de HTML';
const nota3_html = prompt('Ingrese la 3a nota de HTML');
$('#3a_nota_html').append(nota3_html);

const promedio_html = (parseInt(nota1_html) 
+ parseInt(nota2_html) 
+ parseInt(nota3_html))/3;
$('#promedio_html').append(promedio_html);

//CSS
const pregunta_1a_nota_css = 'Ingrese la 1a nota de CSS';
const nota1_css = prompt('Ingrese la 1a nota de CSS');
$('#nota1_css').append(nota1_css);

const pregunta_2a_nota_css = 'Ingrese la 2a nota de CSS';
const nota2_css = prompt('Ingrese la 2a nota de CSS');
$('#2a_nota_css').append(nota2_css);

const pregunta_3a_nota_css = 'Ingrese la 3a nota de CSS';
const nota3_css = prompt('Ingrese la 3a nota de CSS');
$('#3a_nota_css').append(nota3_css);

const promedio_css = (parseInt(nota1_css) 
+ parseInt(nota2_css) 
+ parseInt(nota3_css))/3;
$('#promedio_css').append(promedio_css);

//JS
const pregunta_1a_nota_js = 'Ingrese la 1a nota de JS';
const nota1_js = prompt('Ingrese la 1a nota de JS');
$('#nota1_js').append(nota1_js);

const pregunta_2a_nota_js = 'Ingrese la 2a nota de JS';
const nota2_js = prompt('Ingrese la 2a nota de JS');
$('#2a_nota_js').append(nota2_js);

const pregunta_3a_nota_js = 'Ingrese la 3a nota de JS';
const nota3_js = prompt('Ingrese la 3a nota de JS');
$('#nota3_js').append(nota3_js);

//promedio
const promedio_js = (parseInt(nota1_js) 
+ parseInt(nota2_js) 
+ parseInt(nota3_js))/3;
$('#promedio_js').append(promedio_js);

const promedio_final = (promedio_html + promedio_css + promedio_js)/3;
$('#promedio_final').append(promedio_final);
}
//calcular_notas();

//funcion para esconder y mostrar la tabla
function esconder_tabla () {
  console.log('llego');
  $('table').slideUp(1500);
}
function mostrar_tabla () {
  $('table').slideDown(1500);
}

//conectar el boton

$('#esconder').on('click',esconder_tabla);
$('#mostrar').on('click',mostrar_tabla);