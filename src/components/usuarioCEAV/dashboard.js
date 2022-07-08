import React, {Component} from 'react'
import { Layout } from 'antd';
import { MDBIcon } from 'mdbreact';
import './sidenav.css'
import { FcGoogle } from "react-icons/fc";
import imagenCEAV from '../imagen/CEAVlogo.png'
  import axios from 'axios'
import {API} from '../Graphql/Graphql';
import MUIDataTable from "mui-datatables";
import {  Card, Form as form} from 'antd';
import ceav from '../imagen/logo.png'

const { Header, Content, Footer} = Layout;

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
          tablaInicio:true,
          tablaEmpledos:[],
          modal:false,
          tablaInicio:true,
          dataID:[],
          nombreR:"",
          apellidosR:"",
          correoR:"",
          telefono:"",
          nombre:"",


        }

    } 
    async componentWillMount(){
        await axios({
               url:API,
               method:'post',
               data:{
                 query:`
                   query{   
                    getTablaDataEmpleadoUser(data:"${[]}"){
                        id_empleado
                        nombre
                        apellidos        
                        correo
                        numEmpleado
                        telefono
                        ext
                        dependencia
                        statusEmpleado
                        departamento
                        nombreArea
                        puesto               
                        message
                       } 
                   }
                   `  }           
                })
              .then(response => { 
                 this.setState({tablaEmpledos:response.data.data.getTablaDataEmpleadoUser}) 
               })
               .catch(err=>{
                  console.log('error' ,err.response)
               })    
       }

    render(){ 
        let tablaInicio;
        let data1;
        let array=[];

        const options={ 
            filterType:"drowpdawn",
            responsive: "stacked",
            print:false,
            download:false,
            viewColumns:false,
            elevation:0,
            selectableRows:"none",
            textLabels:{
            body: {
              noMatch: "Lo sentimos, no se encontraron registros coincidentes",
              toolTip: " Ordenar",
              columnHeaderTooltip: column => `Sort for ${column.label}`
            },
            pagination: {
              next: "Página siguiente",
              previous: "Página anterior",
              rowsPerPage: "Filas por página:",
              displayRows: "de",
            },
            toolbar: {
              search: "Buscar",
              downloadCsv: " Descargar CSV",
              print: "Imprimir ",
              viewColumns: "Ver columnas",
              filterTable: "Tabla de filtros",
            },
            filter: {
              all: "Todos",
              title: "FILTROS",
              reset: "RESET",
            },
            viewColumns: {
              title: "Mostrar columnas",
              titleAria: "Mostrar / Ocultar columnas de tabla",
            },
            selectedRows: {
              text: "fila (s) seleccionadas",
              delete: "Eliminar",
              deleteAria: "Eliminar filas seleccionadas",
            },      
          }        
          } 

          const columns = ["NO. EMPLEADO","NOMBRE","APELLIDOS","CORREO","EXT.","PUESTO","UNIDAD ADMINISTRATIVA"];  
          this.state.tablaEmpledos.map((rows)=>{ 
           if(rows.statusEmpleado ==="true") {
             array.push(rows)
           }
         })
              data1 = array.map((rows)=>{                
                    return([rows.numEmpleado,rows.nombre,rows.apellidos,rows.correo,rows.ext,rows.puesto,rows.nombreArea,])
  
                  })           

     tablaInicio = 
     <center>
          <div style={{ width:'95%'}}>            
            <Card  style={{marginTop:"1%",width:"90%"}}>  
            <MUIDataTable                
            title={"DIRECTORIO CEAV" }
            data={data1}
            columns={columns}
            options={options}
            />
            </Card>             
            </div> 
            </center>
           

        return(
            <React.Fragment>   
              <nav class="navbar navbar-light bg-light" >
                <a class="navbar-brand">
                    <img src={imagenCEAV} width="100" height="40" class="d-inline-block align-top" alt="" />   
                </a>
              </nav>

      <Content>
        {tablaInicio}  
      </Content>
      <Footer className='footer main'>
      <center>
      <FcGoogle />&nbsp;<a href="https://www.gob.mx/ceav" target="_blank">www.gob.mx/ceav</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <MDBIcon/><img src={ceav} width="30" height="30"  alt="" /><a href="http://intranet/" target="_blank">intranet/</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </center>
      </Footer>  
            </React.Fragment> 
        )
    }
}export default Dashboard