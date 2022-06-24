import React, {Component} from 'react'
import {Card,Button} from 'antd'
import axios from 'axios';
import {API} from '../Graphql/Graphql'
import {MDBIcon} from 'mdbreact'
import MUIDataTable from "mui-datatables";

class FechaNotificaciones extends Component{
    constructor(props){
        super(props)
        this.state={
            tablaFecha:[]
        }
    }
    componentDidMount(){
        axios({
          url:API,
          method:'post',
          data:{
            query:`
              query{   
                getTablaFechaNotificaciones(data:"${[]}"){
                    id_empleado
                    nombre
                    apellidos
                    id_fecha
                    fechaAlta
                    fechaBaja
                    fechaNotificacionesAlta
                    fechaNotificacionesBaja
                    numEmpleado
                    message
                  } 
              }
              `  }           
           })
         .then(response => { 
            console.log("response",response)
            this.setState({tablaFecha:response.data.data.getTablaFechaNotificaciones}) 
          })
          .catch(err=>{
             console.log('error' ,err.response)
          }) 
      }
    render(){
        let botonEditar;
        let tablaFormulario;
        const options={ 
            filterType:"drowpdawn",
            responsive: "stacked",
            print:false,
            download:false,
            viewColumns:false,
            filter: false,
            elevation:1,
            selectableRows:"none",
            rowsPerPage:5,
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
          const columns = ["NOMBRE","APELLIDOS","","FECHA ALTA","FECHA BAJA","NOTIFICACION ALTA","NOTIFICACION BAJA","EDITAR"]
          let data = this.state.tablaFecha.map((rows)=>{
             botonEditar = <div>            
                    <Button type="link" shape="circle" size="large"
                      onClick={(e)=>this.editar(rows)}
                      >
                    <MDBIcon icon="user-edit" />
                    </Button>
                  </div>
              return([rows.nombre,rows.apellidos,rows.id_fecha,rows.fechaAlta,rows.fechaBaja,rows.fechaNotificacionesAlta,rows.fechaNotificacionesBaja,botonEditar])
            })
            // if(this.state.tablarenderArea === true){
            tablaFormulario=
            <Card>
              <MUIDataTable    
               title={"ÁREAS REGISTRADAS" }
               data={data}
               columns={columns}
               options={options}
               />
            </Card>
        return(
            <React.Fragment>
                {tablaFormulario}
            </React.Fragment>

        )         
        
    }

}export default FechaNotificaciones