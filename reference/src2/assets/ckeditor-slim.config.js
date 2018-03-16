/* toolbar configurator: plugins/ckeditor/samples/toolbarconfigurator/index.html */
CKEDITOR.editorConfig = function (config) {
  config.toolbarGroups = [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'forms', groups: ['forms'] },
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'colors', groups: ['colors'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
      { name: 'links', groups: ['links'] },
      { name: 'insert', groups: ['insert'] },
      { name: 'styles', groups: ['styles'] },
      { name: 'editing', groups: ['find', 'selection', 'editing'] },
      { name: 'tools', groups: ['tools'] },
      { name: 'others', groups: ['others'] },
      { name: 'about', groups: ['about'] }
  ];

  config.disableNativeSpellChecker = false;
  config.removePlugins = 'contextmenu,liststyle,tabletools';

  config.removeButtons = 'Source,Save,Templates,Cut,Find,SelectAll,Form,Outdent,Blockquote,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Youtube,Format,Font,FontSize,Maximize,ShowBlocks,About,Indent,CreateDiv,BidiLtr,BidiRtl,Language,Copy,Paste,PasteText,PasteFromWord,Print,Preview,NewPage,Replace,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Superscript,Subscript,Strike,RemoveFormat,JustifyBlock,JustifyRight,JustifyCenter,JustifyLeft,Styles';
};
