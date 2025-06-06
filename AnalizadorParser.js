// Generated from Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,15,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,5,0,23,8,0,10,0,12,0,26,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,54,8,4,10,4,12,4,57,9,4,1,4,1,
4,1,5,1,5,1,5,5,5,64,8,5,10,5,12,5,67,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
6,76,8,6,1,7,1,7,5,7,80,8,7,10,7,12,7,83,9,7,1,8,4,8,86,8,8,11,8,12,8,87,
1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,7,8,91,0,18,1,0,0,0,2,36,1,0,0,0,
4,38,1,0,0,0,6,43,1,0,0,0,8,51,1,0,0,0,10,60,1,0,0,0,12,75,1,0,0,0,14,77,
1,0,0,0,16,85,1,0,0,0,18,19,5,1,0,0,19,20,3,14,7,0,20,24,5,9,0,0,21,23,3,
2,1,0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,27,1,0,
0,0,26,24,1,0,0,0,27,28,5,10,0,0,28,1,1,0,0,0,29,37,3,4,2,0,30,37,3,6,3,
0,31,37,3,8,4,0,32,33,5,2,0,0,33,34,3,10,5,0,34,35,5,14,0,0,35,37,1,0,0,
0,36,29,1,0,0,0,36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,0,0,0,37,3,1,0,0,0,38,
39,3,14,7,0,39,40,5,13,0,0,40,41,3,10,5,0,41,42,5,14,0,0,42,5,1,0,0,0,43,
44,5,3,0,0,44,45,3,8,4,0,45,46,5,4,0,0,46,47,5,11,0,0,47,48,3,14,7,0,48,
49,5,12,0,0,49,50,3,8,4,0,50,7,1,0,0,0,51,55,5,9,0,0,52,54,3,2,1,0,53,52,
1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,
0,0,0,58,59,5,10,0,0,59,9,1,0,0,0,60,65,3,12,6,0,61,62,5,5,0,0,62,64,3,12,
6,0,63,61,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,11,1,0,0,
0,67,65,1,0,0,0,68,76,3,16,8,0,69,76,3,14,7,0,70,76,5,6,0,0,71,72,5,11,0,
0,72,73,3,10,5,0,73,74,5,12,0,0,74,76,1,0,0,0,75,68,1,0,0,0,75,69,1,0,0,
0,75,70,1,0,0,0,75,71,1,0,0,0,76,13,1,0,0,0,77,81,5,7,0,0,78,80,7,0,0,0,
79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,15,1,0,0,0,83,
81,1,0,0,0,84,86,5,8,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,
1,0,0,0,88,17,1,0,0,0,7,24,36,55,65,75,81,87];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'programa'", "'imprimir'", "'procesar'", 
                            "'manejarError'", "'+'", null, null, null, "'{'", 
                            "'}'", "'('", "')'", "'='", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, "CADENA", 
                             "LETRA", "DIGITO", "LLAVE_IZQ", "LLAVE_DER", 
                             "PAR_IZQ", "PAR_DER", "IGUAL", "PUNTOYCOMA", 
                             "ESPACIOS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "excepcion", 
                         "bloque", "expresion", "termino", "identificador", 
                         "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(AnalizadorParser.T__0);
	        this.state = 19;
	        this.identificador();
	        this.state = 20;
	        this.match(AnalizadorParser.LLAVE_IZQ);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 652) !== 0)) {
	            this.state = 21;
	            this.instruccion();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this.match(AnalizadorParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_instruccion);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.asignacion();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.excepcion();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.bloque();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 32;
	            this.match(AnalizadorParser.T__1);
	            this.state = 33;
	            this.expresion();
	            this.state = 34;
	            this.match(AnalizadorParser.PUNTOYCOMA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.identificador();
	        this.state = 39;
	        this.match(AnalizadorParser.IGUAL);
	        this.state = 40;
	        this.expresion();
	        this.state = 41;
	        this.match(AnalizadorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(AnalizadorParser.T__2);
	        this.state = 44;
	        this.bloque();
	        this.state = 45;
	        this.match(AnalizadorParser.T__3);
	        this.state = 46;
	        this.match(AnalizadorParser.PAR_IZQ);
	        this.state = 47;
	        this.identificador();
	        this.state = 48;
	        this.match(AnalizadorParser.PAR_DER);
	        this.state = 49;
	        this.bloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(AnalizadorParser.LLAVE_IZQ);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 652) !== 0)) {
	            this.state = 52;
	            this.instruccion();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.match(AnalizadorParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.termino();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 61;
	            this.match(AnalizadorParser.T__4);
	            this.state = 62;
	            this.termino();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_termino);
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.numero();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.identificador();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.match(AnalizadorParser.CADENA);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 71;
	            this.match(AnalizadorParser.PAR_IZQ);
	            this.state = 72;
	            this.expresion();
	            this.state = 73;
	            this.match(AnalizadorParser.PAR_DER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(AnalizadorParser.LETRA);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 78;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.match(AnalizadorParser.DIGITO);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.T__0 = 1;
AnalizadorParser.T__1 = 2;
AnalizadorParser.T__2 = 3;
AnalizadorParser.T__3 = 4;
AnalizadorParser.T__4 = 5;
AnalizadorParser.CADENA = 6;
AnalizadorParser.LETRA = 7;
AnalizadorParser.DIGITO = 8;
AnalizadorParser.LLAVE_IZQ = 9;
AnalizadorParser.LLAVE_DER = 10;
AnalizadorParser.PAR_IZQ = 11;
AnalizadorParser.PAR_DER = 12;
AnalizadorParser.IGUAL = 13;
AnalizadorParser.PUNTOYCOMA = 14;
AnalizadorParser.ESPACIOS = 15;

AnalizadorParser.RULE_programa = 0;
AnalizadorParser.RULE_instruccion = 1;
AnalizadorParser.RULE_asignacion = 2;
AnalizadorParser.RULE_excepcion = 3;
AnalizadorParser.RULE_bloque = 4;
AnalizadorParser.RULE_expresion = 5;
AnalizadorParser.RULE_termino = 6;
AnalizadorParser.RULE_identificador = 7;
AnalizadorParser.RULE_numero = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_programa;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(AnalizadorParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(AnalizadorParser.LLAVE_DER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(AnalizadorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_asignacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	IGUAL() {
	    return this.getToken(AnalizadorParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(AnalizadorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_excepcion;
    }

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	PAR_IZQ() {
	    return this.getToken(AnalizadorParser.PAR_IZQ, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	PAR_DER() {
	    return this.getToken(AnalizadorParser.PAR_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_bloque;
    }

	LLAVE_IZQ() {
	    return this.getToken(AnalizadorParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(AnalizadorParser.LLAVE_DER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_termino;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	CADENA() {
	    return this.getToken(AnalizadorParser.CADENA, 0);
	};

	PAR_IZQ() {
	    return this.getToken(AnalizadorParser.PAR_IZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PAR_DER() {
	    return this.getToken(AnalizadorParser.PAR_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.LETRA);
	    } else {
	        return this.getToken(AnalizadorParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.DIGITO);
	    } else {
	        return this.getToken(AnalizadorParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.DIGITO);
	    } else {
	        return this.getToken(AnalizadorParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgramaContext = ProgramaContext; 
AnalizadorParser.InstruccionContext = InstruccionContext; 
AnalizadorParser.AsignacionContext = AsignacionContext; 
AnalizadorParser.ExcepcionContext = ExcepcionContext; 
AnalizadorParser.BloqueContext = BloqueContext; 
AnalizadorParser.ExpresionContext = ExpresionContext; 
AnalizadorParser.TerminoContext = TerminoContext; 
AnalizadorParser.IdentificadorContext = IdentificadorContext; 
AnalizadorParser.NumeroContext = NumeroContext; 
