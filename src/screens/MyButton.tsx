import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Clipboard,
} from 'react-native';

const MyButton = () => {
  const [label, setLabel] = useState('Click Me');
  const [bgColor, setBgColor] = useState('#007AFF');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [borderRadius, setBorderRadius] = useState('8');
  const [padding, setPadding] = useState('12');
  const [disabled, setDisabled] = useState(false);

  const buttonStyle = {
    backgroundColor: bgColor,
    borderRadius: Number(borderRadius),
    padding: Number(padding),
    opacity: disabled ? 0.5 : 1,
    alignItems: 'center',
  };

  const jsxCode = `<TouchableOpacity 
  style={{
    backgroundColor: '${bgColor}', 
    borderRadius: ${borderRadius}, 
    padding: ${padding},
    alignItems: 'center',
    opacity: ${disabled ? 0.5 : 1}
  }} 
  ${disabled ? 'disabled' : ''} 
  onPress={() => {}}>
  <Text style={{color: '${textColor}'}}>${label}</Text>
</TouchableOpacity>`;

  const copyToClipboard = () => {
    Clipboard.setString(jsxCode);
    Alert.alert('Copied', 'Button JSX code copied to clipboard');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled">
          {/* Live Preview */}
          <View style={styles.preview}>
            <TouchableOpacity
              style={buttonStyle}
              disabled={disabled}
              onPress={() => {}}>
              <Text style={{color: textColor, fontWeight: 'bold'}}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <Input label="Button Text" value={label} setValue={setLabel} />
          <Input
            label="Background Color"
            value={bgColor}
            setValue={setBgColor}
          />
          <Input label="Text Color" value={textColor} setValue={setTextColor} />
          <Input
            label="Border Radius"
            value={borderRadius}
            setValue={setBorderRadius}
            keyboardType="numeric"
          />
          <Input
            label="Padding"
            value={padding}
            setValue={setPadding}
            keyboardType="numeric"
          />

          <View style={styles.row}>
            <Text style={styles.label}>Disabled</Text>
            <Switch value={disabled} onValueChange={setDisabled} />
          </View>

          <TouchableOpacity style={styles.copyBtn} onPress={copyToClipboard}>
            <Text style={styles.copyText}>📋 Copy JSX</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// Reusable Input
const Input = ({label, value, setValue, keyboardType = 'default'}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={setValue}
      style={styles.input}
      keyboardType={keyboardType}
    />
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  preview: {
    marginBottom: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  label: {fontSize: 16, fontWeight: '600', marginTop: 12},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  copyBtn: {
    marginTop: 24,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  copyText: {color: '#fff', fontWeight: 'bold'},
});

export default MyButton;
