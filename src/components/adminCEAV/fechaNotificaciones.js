import React, {Component} from 'react'
import {Card,Button} from 'antd'
import axios from 'axios';
import {API} from '../Graphql/Graphql'
import {MDBIcon} from 'mdbreact'
import MUIDataTable from "mui-datatables";
import {MDBRow,MDBCol,MDBBtn,MDBModal,MDBContainer,MDBModalBody,MDBModalHeader,MDBModalFooter} from 'mdbreact'
import { Row,Col,Input } from 'reactstrap'
import { Select,Space,DatePicker, Form  } from 'antd';
import swal from 'sweetalert';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class FechaNotificaciones extends Component{
    constructor(props){
        super(props)
        this.state={
            tablaFecha:[],
            ArrayNotiFechas:[],
            modal:false,
            tablarenderNOtificacionFechas:true,            
            id_empleadoUpdate:'',
            nombreUpdate:'',
            apellidosUpdate:'',
            id_fechaUpdate:'',
            fechaAltaUpdate:'',
            fechaBajaUpdate:'',
            fechaNotificacionAltaUpdate:'',
            fechaNotificacionBajaUpdate:'',
            numEmpleadoUpdate:'',   
            fechaAlta1:'',
            fechaBaja1:'',
            fechaNotificacionAlta1:'',
            fechaNotificacionBaja1:'',
            valor1:'', 
            valor2:'',
            valor3:'',
            valor4:'',

        }
        this.handleChange1 = this.handleChange1.bind(this)
         this.handleChange2 = this.handleChange2.bind(this)
         this.handleChange3 = this.handleChange3.bind(this)
         this.handleChange4 = this.handleChange4.bind(this)
         this.toggle = this.toggle.bind(this)
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
                    fechaNotificacionAlta
                    fechaNotificacionBaja
                    numEmpleado
                    message
                  } 
              }
              `  }           
           })
         .then(response => { 
            // console.log("response",response)
            this.setState({tablaFecha:response.data.data.getTablaFechaNotificaciones}) 
          })
          .catch(err=>{
             console.log('error' ,err.response)
          }) 
          this.toggle = this.toggle.bind(this)
      }

      editar(id){ 
        console.log("esto es id",id)
        this.setState({ArrayNotiFechas:id})  
        this.setState({
          id_empleadoUpdate:id.id_empleado,
          nombreUpdate:id.nombre,
          apellidosUpdate:id.apellidos,
          id_fechaUpdate:id.id_fecha,
          fechaAltaUpdate:id.fechaAlta,
          fechaBajaUpdate:id.fechaBaja,
          fechaNotificacionAltaUpdate:id.fechaNotificacionAlta,
          fechaNotificacionBajaUpdate:id.fechaNotificacionBaja,
          numEmpleadoUpdate:id.numEmpleado,        
        })
            this.setState({
              modal:!this.state.modal
            });   
      }
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      } 

      handleChange1(e){
        // console.log("e",e)
        if(e){
          let fecha1 = e._d.toString();
          this.setState({valor1:fecha1})
          // console.log("e1",this.state.fechaAlta1)
        }
      }
      handleChange2(e){
        // console.log("e",e)
        if(e){
          let fecha2 = e._d.toString()
          this.setState({valor2:fecha2})
          console.log("e2",fecha2)
          console.log("e2V",this.state.valor2)
        }
      }
      handleChange3(e){
        if(e){
          let fecha3 = e._d.toString();
          this.setState({valor3:fecha3})
          console.log("e3",fecha3)
        }
      }
      handleChange4(e){
        if(e){
          let fecha4 = e._d.toString();
          this.setState({valor4:fecha4})
          console.log("e4",fecha4)
        }
      }

      onSubmitBtn =(e)=>{
        // e.preventDefault(); 
      let id_fecha = this.state.id_fechaUpdate
      let fechaAlta = this.state.valor1      
      let fechaBaja = this.state.valor2      
      let fechaNotificacionAlta = this.state.valor3 
      let fechaNotificacionBaja = this.state.valor4      
      let fechaAltaUpdate = this.state.fechaAltaUpdate
      let fechaBajaUpdate = this.state.fechaBajaUpdate  
      let fechaNotificacionAltaUpdate = this.state.fechaNotificacionAltaUpdate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      let fechaNotificacionBajaUpdate = this.state.fechaNotificacionBajaUpdate
       if(id_fecha ){  
           axios({
          url: API,
          method: "post",
          data: {
            query: `
                    mutation{
                      updatefechasNotificaciones(data:"${[id_fecha,fechaAlta || fechaAltaUpdate,fechaBaja || fechaBajaUpdate,fechaNotificacionAlta || fechaNotificacionAltaUpdate,fechaNotificacionBaja || fechaNotificacionBajaUpdate]}"){  
                        message
                         } 
                    }
                    `
          }
        })
          .then((response) => { 
            // console.log("response",response)
           if(response.data.data.updatefechasNotificaciones.message === "actualizacion exitosa"){
              swal({              
              title:"actualizacion exitosa",                            
              icon: "success",
              button:false,
              timer: 1500
            });  
            // this.setState({area:[],nomeclatura:[],numSerie:[]})     
            setTimeout(function(){
             window.location.reload()
              }, 1500);     
          }else{
           swal({
              title:"Error!",
              text: "Algo salio mal, intentalo nuevamente",
              icon: "error",
              button:false
            }); 
          }          
          }).catch((err) => {
            console.log("error", err.response);
          });     
    
        }
        // else{
        //    swal({
        //     title:"Notificación del sistema",
        //     text: "Por favor llene los campos obligatorios *",
        //     icon: "warning",             
        //     button:false
        //   }); 
        // }        
      };
    render(){
      const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
      const { Option } = Select;
        let botonEditar;
        let tablaFormulario;
        let modal;
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
          
          const columns = ["ID","NOMBRE","APELLIDOS","FECHA ALTA","FECHA BAJA","NOTIFICACION ALTA","NOTIFICACION BAJA","EDITAR"]
            let data = this.state.tablaFecha.map((rows)=>{
            // ****fechaAlta******* 
            let dataFechaAlta;
            if(rows.fechaAlta === ""){
              dataFechaAlta= "NO ASIGNADO"
            }else if(rows.fechaAlta){
              let fechaAlta=rows.fechaAlta       
              const fechaA = new Date(fechaAlta); 
              var letrasM1 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
              let diaAlta = fechaA.getDate()
              let MesSubstringA = fechaA.getMonth() +1
              let numeroPosicionMesA = parseInt(MesSubstringA,10)
              let mesA  = letrasM1[numeroPosicionMesA - 1] 
              let añoA = fechaA.getFullYear()  
               dataFechaAlta = diaAlta +"/"+mesA+"/"+añoA
            } 
            // ****fechaBaja*******
            let dataFechaBaja;
            if(rows.fechaBaja === "") {
              dataFechaBaja = "NO ASIGNADO"
            }else if (rows.fechaBaja){
              let fechaBaja=rows.fechaBaja       
              const fechaB = new Date(fechaBaja); 
              var letrasM2 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
              let diaBaja = fechaB.getDate()
              let MesSubstringB = fechaB.getMonth() +1
              let numeroPosicionMesB = parseInt(MesSubstringB,10)
              let mesB  = letrasM2[numeroPosicionMesB - 1] 
              let añoB = fechaB.getFullYear()  
              dataFechaBaja = diaBaja +"/"+mesB+"/"+añoB 
            }           
            // ****fechanotificacionAlta*******
            let dataFechaNotificacionAlta;
            if(rows.fechaNotificacionAlta === "") {
              dataFechaBaja = "NO ASIGNADO"
            }else if (rows.fechaNotificacionAlta){
              let fechaNotAlta=rows.fechaNotificacionAlta       
              const fechaNotA = new Date(fechaNotAlta); 
              var letrasM3 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
              let diaNotAlta = fechaNotA.getDate()
              let MesSubstringNotA = fechaNotA.getMonth() +1
              let numeroPosicionMesNotA = parseInt(MesSubstringNotA,10)
              let mesNotA  = letrasM3[numeroPosicionMesNotA - 1] 
              let añoNotA = fechaNotA.getFullYear()  
              dataFechaNotificacionAlta = diaNotAlta +"/"+mesNotA+"/"+añoNotA 
            }
            // ****fechanotificacionBaja*******
            let dataFechaNotificacionBAja;
            if(rows.fechaNotificacionBaja === "") {
              dataFechaNotificacionBAja = "NO ASIGNADO"
            }else if (rows.fechaNotificacionBaja){
              console.log("esto es rows.fechaNotificacionBaja",rows.fechaNotificacionBaja)
              let fechaNotBaja=rows.fechaNotificacionBaja       
              const fechaNotB = new Date(fechaNotBaja); 
              var letrasM4 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
              let diaNotBaja = fechaNotB.getDate()
              let MesSubstringNotB = fechaNotB.getMonth() +1
              let numeroPosicionMesNotB = parseInt(MesSubstringNotB,10)
              let mesNotB  = letrasM4[numeroPosicionMesNotB - 1] 
              let añoNotaB = fechaNotB.getFullYear()  
              dataFechaNotificacionBAja = diaNotBaja +"/"+mesNotB+"/"+añoNotaB 
            }
             botonEditar = <div>            
                    <Button type="link" shape="circle" size="large"
                      onClick={(e)=>this.editar(rows)}
                      >
                    <MDBIcon icon="user-edit" />
                    </Button>
                  </div>
              return([rows.id_fecha,rows.nombre,rows.apellidos,dataFechaAlta,dataFechaBaja,dataFechaNotificacionAlta,dataFechaNotificacionBAja,botonEditar])
            })
            if(this.state.tablarenderNOtificacionFechas === true){
            tablaFormulario=
            <Card>
              <MUIDataTable    
               title={"FECHAS DE ALTAS, BAJA Y NOTIFICACIONES"}
               data={data}
               columns={columns}
               options={options}
               />
            </Card>
            }
             // ****fechaAlta******* 
             let dataFechaAlta;
             if(this.state.fechaAltaUpdate === ""){
               dataFechaAlta= ""
             }else if(this.state.fechaAltaUpdate){
               let fechaAlta=this.state.fechaAltaUpdate       
               const fechaA = new Date(fechaAlta); 
               var letrasM1 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
               let diaAlta = fechaA.getDate()
               let MesSubstringA = fechaA.getMonth() +1
               let numeroPosicionMesA = parseInt(MesSubstringA,10)
               let mesA  = letrasM1[numeroPosicionMesA - 1] 
               let añoA = fechaA.getFullYear()  
                dataFechaAlta = diaAlta +"/"+mesA+"/"+añoA
             } 
             // ****fechaBaja*******
             let dataFechaBaja;
             if(this.state.fechaBajaUpdate === "") {
               dataFechaBaja = ""
             }else if (this.state.fechaBajaUpdate){
               let fechaBaja=this.state.fechaBajaUpdate       
               const fechaB = new Date(fechaBaja); 
               var letrasM2 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
               let diaBaja = fechaB.getDate()
               let MesSubstringB = fechaB.getMonth() +1
               let numeroPosicionMesB = parseInt(MesSubstringB,10)
               let mesB  = letrasM2[numeroPosicionMesB - 1] 
               let añoB = fechaB.getFullYear()  
               dataFechaBaja = diaBaja +"/"+mesB+"/"+añoB 
             }
             // ****fechanotificacionAlta*******
             let dataFechaNotificacionAlta;
             if(this.state.fechaNotificacionAltaUpdate === "") {
               dataFechaBaja = ""
             }else if (this.state.fechaNotificacionAltaUpdate){
               let fechaNotAlta=this.state.fechaNotificacionAltaUpdate      
               const fechaNotA = new Date(fechaNotAlta); 
               var letrasM3 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
               let diaNotAlta = fechaNotA.getDate()
               let MesSubstringNotA = fechaNotA.getMonth() +1
               let numeroPosicionMesNotA = parseInt(MesSubstringNotA,10)
               let mesNotA  = letrasM3[numeroPosicionMesNotA - 1] 
               let añoNotA = fechaNotA.getFullYear()  
               dataFechaNotificacionAlta = diaNotAlta +"/"+mesNotA+"/"+añoNotA 
             }
             // ****fechanotificacionBaja*******
             let dataFechaNotificacionBAja;
             if(this.state.fechaNotificacionBajaUpdate === "") {
               dataFechaNotificacionBAja = ""
             }else if (this.state.fechaNotificacionBajaUpdate){
               // console.log("esto es rows.fechaNotificacionBaja",rows.fechaNotificacionBaja)
               let fechaNotBaja = this.state.fechaNotificacionBajaUpdate       
               const fechaNotB = new Date(fechaNotBaja); 
               var letrasM4 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
               let diaNotBaja = fechaNotB.getDate()
               let MesSubstringNotB = fechaNotB.getMonth() +1
               let numeroPosicionMesNotB = parseInt(MesSubstringNotB,10)
               let mesNotB  = letrasM4[numeroPosicionMesNotB - 1] 
               let añoNotaB = fechaNotB.getFullYear()                
               dataFechaNotificacionBAja = diaNotBaja +"/"+mesNotB+"/"+añoNotaB
               }
             modal= 
             <div>
              {/* <MDBBtn color="secondary" onClick={this.toggle}>Top right</MDBBtn> */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <MDBModalHeader toggle={this.toggle}><center>{this.state.nombreUpdate}&nbsp;{this.state.apellidosUpdate}</center></MDBModalHeader>
          <MDBModalBody>
            <Form onSubmit={this.onSubmitBtn}> 
  <Row>
    <Col xs="6">
    <label htmlFor="defaultFormLoginPasswordEx"> <strong>FECHA DE ALTA:</strong></label>
    <br></br>
         <DatePicker style={{ width: 370 }} placeholder={dataFechaAlta}  onChange={this.handleChange1} format={dateFormatList}  size="large"/>
    </Col >
    <Col xs="6">
    <label htmlFor="defaultFormLoginPasswordEx"> <strong>FECHA DE BAJA:</strong></label>
         <DatePicker style={{ width: 370 }} placeholder={dataFechaBaja} onChange={this.handleChange2} format={dateFormatList} size="large" />
    </Col >
    <br></br>
    <Col xs="6">
    <label htmlFor="defaultFormLoginPasswordEx"> <strong>FECHA NOTIFICACIÓN ALTA:</strong></label>
         <DatePicker style={{ width: 370 }} placeholder={dataFechaNotificacionAlta} onChange={this.handleChange3} format={dateFormatList} size="large" />
    </Col >
    <Col xs="6">
    <label htmlFor="defaultFormLoginPasswordEx"> <strong>FECHA NOTIFICACIÓN BAJA:</strong></label>
         <DatePicker style={{ width: 370 }} placeholder={dataFechaNotificacionBAja}  onChange={this.handleChange4} format={dateFormatList} size="large" />
    </Col >
  </Row>
            <div style={{marginTop:"3%"}} className="text-center">
                <MDBBtn outline color="secondary"  onClick={e=>this.onSubmitBtn()} size='sm'>GUARDAR</MDBBtn>
                <MDBBtn outline color="danger" size='sm' onClick={e=>this.toggle()} >CANCELAR</MDBBtn>
            </div>
            </Form>
          </MDBModalBody>
          <MDBModalFooter>           
          </MDBModalFooter>
        </MDBModal>
             </div>
        return(
            <React.Fragment>
                {tablaFormulario}
                {modal}
            </React.Fragment>

        )         
        
    }

}export default FechaNotificaciones